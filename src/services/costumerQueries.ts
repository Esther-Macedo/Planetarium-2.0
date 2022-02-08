import { getRepository } from 'typeorm';

import User from '../entity/User';
/* export async function itWillWork() {
  const conn = (await createConnection({
    database: 'teste',
    host: 'localhost',
    type: 'mysql',
    port: 3306,
    username: 'root',
    password: 'Delphini71',
    name: 'default',
    synchronize: true,
    entities: [
      User, Orders, Products,
    ],
  }));
  const vai = await conn.
  getRepository(User).find();

  return vai;
} */

type userData ={
  name:string
  userName:string
  email:string
  pass:string
}
class CostumerQueries {
  public conn = getRepository(User);

  async seeUsers() {
    try {
      const data = await this.conn.find();
      return data;
    } catch (e) {
      console.log(e);
      throw new Error('Ops, algo deu errado');
    }
  }

  async getUsernameAndPass(name:string) {
    try {
      // selecionar o nome e a senha de um usuario de acordo com o userName
      const data = await this.conn.findOne({ where: { userName: name }, select: ['userName', 'pass'] });
      return data;
    } catch (e) {
      console.log(e);
      throw new Error('Ops, algo deu errado');
    }
  }

  async createUser({
    name, userName, email, pass,
  }: userData) {
    const newUser = this.conn.create({
      name,
      userName,
      email,
      pass,
    });
    try {
      await this.conn.save(newUser);
    } catch (e) {
      console.log(e);
      throw new Error('Ops, Algo deu errado');
    }
  }

  async deleteUser(id:number) {
    const paredao = await this.conn.findOne(id);
    if (!paredao) {
      throw new Error('Ops, quem você está tentando eliminar não existe');
    }
    await this.conn.delete(id);
  }

  async updateUser({
    name, userName, email, pass,
  }: userData, costid:number) {
    const person = await this.conn.findOne(costid);

    if (!person) {
      throw new Error('Ops, este usuário não existe');
    }
    // o eslint corrigiu essa parte.
    person.name = name || person.name;
    person.userName = userName || person.userName;
    person.email = email || person.email;
    person.pass = pass || person.pass;

    await this.conn.save(person);
  }
}

export default CostumerQueries;
