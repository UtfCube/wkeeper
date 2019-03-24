import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Product } from 'src/products/entity/product.entity';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  path: string;

  @OneToOne(type => Product, product => product.image)
  product: Product;
}
