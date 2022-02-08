import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Orders from './Order';

@Entity()
class User {
  @PrimaryGeneratedColumn()
    costid:number;

  @Column()
    name:string;

  @Column()
    userName:string;

  @Column()
    email:string;

  @Column('varchar', { length: 200 })
    pass:string;

  @OneToMany(() => Orders, (order) => order.costumer)
    orders:Orders[];
}
export default User;
