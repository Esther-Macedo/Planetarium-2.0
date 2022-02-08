import { getRepository } from 'typeorm';
import Orders from '../entity/Order';
import User from '../entity/User';
import Products from '../entity/Products';
import GateKeeper from '../validator/validator';

class OrderQueries {
  ordersRepo = getRepository(Orders);

  // vou experimentar fazer um create sem um type, porque sim.
  async createOrder(
    productid:number,
    costid:number,
    qtd:number,

  ) {
    try {
      const costumer = await getRepository(User).findOne(costid);
      const product = await getRepository(Products).findOne(productid);

      if (!costumer) {
        throw new Error('Ops, usuário inexistente');
      }
      if (!product) {
        throw new Error('Ops, usuário inexistente');
      }
      // esse aqui faz as regras de negocio acontecerem
      // (caso aquela doideira dos subscribres não funcione)
      new GateKeeper().checkqtd(qtd, productid);

      const order = this.ordersRepo.create({
        prodId: product.productid,
        costId: costumer.costid,
        askdqtd: qtd,
      });
      await this.ordersRepo.save(order);
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }

  async deleteOrder(id:number) {
    try {
      const orders = await this.ordersRepo.findOne(id);
      if (!orders) {
        return new Error('Ops, esse pedido não existe');
      }
      await this.ordersRepo.delete(id);
      return orders;// pedi pra retornar porque o eslint tava reclamando
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }

  async seeOrders() {
    try {
      const orders = this.ordersRepo.find();
      return orders;
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }
}

export default OrderQueries;
