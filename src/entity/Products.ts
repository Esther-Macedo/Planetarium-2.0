import {
  Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import Orders from './Order';

@Entity()
class Products {
 @PrimaryGeneratedColumn()
   productid:number;

 @Column()
   productname:string;

 @Column()
   type:string;

 @Column('varchar', { length: 1 })
   lifesupport:string;

 @Column()
   details:string;

 @Column()
   qtd:number;

 @OneToMany(() => Orders, (order) => order.product)
   orders:Orders[];
}

export default Products;
