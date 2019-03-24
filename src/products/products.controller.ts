import { Controller, Get, Post, Body, UsePipes, Res, Param, Delete, UseInterceptors, FileInterceptor, UploadedFile, HttpStatus, HttpException, Query } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-products.dto';
import { ProductsService } from './products.service';
import { ImageService } from 'src/image/image.service';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { ParseUintPipe } from './common/pipes/parse-int.pipe';
import { multerOptions } from './multer.config';

@Controller('api/products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService,
        private readonly imageService: ImageService) {}
    
    @Post('new/image')
    @UseInterceptors(FileInterceptor('img', multerOptions))
    async createImage(@UploadedFile() image_info) {
        const { id } = await this.imageService.create(image_info);
        return { id };
    }

    @Post('delete')
    async deleteByIds(@Body() ids: number[]) {
        const products = await this.productsService.getProductsByIds(ids);
        await this.imageService.unlinkImages(products);
        return await this.productsService.deleteByIds(ids);
    }

    @Post('new')
    @UsePipes(ValidationPipe)
    async createProduct(@Body() createProductDto: CreateProductDto, @Query() query) {
        const image = await this.imageService.getImageById(+query.image_id);
        const { id } = await this.productsService.create(createProductDto, image);
        return { id };
    }

    @Post(':id')
    @UsePipes(ValidationPipe)
    async updateInfo(@Param('id', ParseUintPipe) id, @Body() updateProductDto: UpdateProductDto) {
        return await this.productsService.updateInfo(updateProductDto);
    }

    @Post(':id/image')
    @UseInterceptors(FileInterceptor('img', multerOptions))
    async updateImage(@Param('id', ParseUintPipe) id, @UploadedFile() image) {
        const product = await this.productsService.getProductById(id);
        await this.imageService.updateImage(product, image);
    }

    @Get()
    async findAll() {
        return await this.productsService.findAll();
    }

    @Get(':id')
    async getProductById(@Param('id', ParseUintPipe) id) {
        const product = await this.productsService.getProductById(id);
        if (product == null) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Такого продукта не существует',
              }, HttpStatus.NOT_FOUND);
        }
        delete product.image;
        return product;
    }

    @Get(':id/image')
    async getImageById(@Param('id', ParseUintPipe) id, @Res() res) {
        const product = await this.productsService.getProductById(id);
        if (product == null) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Такого продукта не существует',
              }, HttpStatus.NOT_FOUND);
        } else {
            if (product.image == null) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Изображение не доступно',
                  }, HttpStatus.NOT_FOUND);
            } else {
                res.sendFile(product.image.path);
            }
        }
    }


    @Delete(':id')
    async deleteById(@Param('id', ParseUintPipe) id) {
        const product = await this.productsService.getProductById(id);
        await this.imageService.unlinkImage(product);
        return await this.productsService.deleteById(id);
    }
}
