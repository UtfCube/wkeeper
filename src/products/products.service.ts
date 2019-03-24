import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { Image } from 'src/image/entity/image.entity'
import { IProduct } from './interfaces/products.interfaces';
import { unlinkSync } from 'fs';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async create(info: IProduct, image: Image) {
        let product = this.productRepository.create(info);
        product.image = image;
        await this.productRepository.save(product);
        return product;
    }

    async updateInfo(info: IProduct) {
        await this.productRepository.update(info.id, info);
    }

    async getProductsByIds(ids: number[]) {
        return await this.productRepository.findByIds(ids);
    }

    async findAll(): Promise<Product[]> {
        const products = await this.productRepository.find();
        for (const product of products) {
            delete product.image;
        }
        return products;
    }

    async getProductById(id: number): Promise<Product> {
        return await this.productRepository.findOne(id);
    }

    async deleteByIds(ids: number[]) {
        return await this.productRepository.delete(ids);
    }

    async deleteById(id: number) {
        return await this.productRepository.delete(id);
    }
}
