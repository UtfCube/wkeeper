import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entity/image.entity';
import { Product } from 'src/products/entity/product.entity';
import { unlinkSync } from 'fs';
import {getManager} from "typeorm";
//import { IImage } from './interfaces/image.interface';

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>,
    ) {}

    create(image_info: any): Promise<Image> {
        return new Promise(async (resolve, reject) => {
            if (image_info !== undefined) {
                try {
                    const image = this.imageRepository.create({ path: image_info.path });
                    await this.imageRepository.save(image);
                    return resolve(image);
                } catch(error) {
                    return reject(error);
                }
            } else {
                resolve(undefined);
            }        
        })
    }

    async updateImage(product: Product, image_info: any) {
        if (image_info !== undefined) {
            this.unlinkImage(product);
            if (product.image) {
                await this.imageRepository.update(product.image.id, { path: image_info.path });
            }
            else {
                const image = await this.create(image_info);
                product.image = image;
                const manager = getManager();
                manager.save(product);
                
            }
        }
    }

    async getImageById(id: number) {
        return await this.imageRepository.findOne(id);
    }

    async deleteImages(products: Product[]) {
        this.unlinkImages(products);
        let images = products.map((x: Product) => x.image);
        await this.imageRepository.remove(images);
    }

    async deleteImage(product: Product) {
        this.unlinkImage(product);
        await this.imageRepository.delete(product.image.id);
    }

    async unlinkImages(products: Product[]) {
        for (let product of products) {
            await this.unlinkImage(product);
        }
    }

    unlinkImage(product: Product) {
        if (product.image) {
            unlinkSync(product.image.path);
        }
    }

}