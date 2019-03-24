import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ImageService } from 'src/image/image.service';
import { Product } from './entity/product.entity';
import { Image } from 'src/image/entity/image.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Product, Image])],
    controllers: [ProductsController],
    providers: [ProductsService, ImageService],
})
export class ProductsModule { }
