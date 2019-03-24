import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Image } from 'src/image/entity/image.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: true })
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ length: 200, nullable: true })
  location: string;

  @Column({ nullable: true })
  date: Date;

  @Column({ nullable: true })
  count: number;

  @Column({ nullable: true })
  country: string;

  @Column('text', { nullable: true })
  comment: string;

  @OneToOne(type => Image, image => image.product, {
    cascade: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  image: Image;
}
