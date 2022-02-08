import {
  Column,
  Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn,
} from 'typeorm';
import Products from './Products';
import User from './User';

@Entity()
class Orders {
    @PrimaryGeneratedColumn()
      id:number;

    @PrimaryColumn()
      prodId:number;

    @OneToMany(() => Products, (product) => product.orders)
    @JoinColumn({ name: 'prodId' })
      product:Products;

    @PrimaryColumn()
      costId:number;

    @OneToMany(() => User, (costumer) => costumer.orders)
    @JoinColumn({ name: 'costId' })
      costumer:User;

    @Column()
      askdqtd:number;
}
export default Orders;
