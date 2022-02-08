// ATENÇÂO TALVEZZZ O CODIGO ABAIXO NÃO FAÇA NENHUM SENTIDO
// Eu desliguei o eslint por um motivo... tome cuidado.
// se funciona só deus e turing sabem
import { listenerCount } from 'process';
import {
  EntitySubscriberInterface, EventSubscriber, getRepository, InsertEvent,
} from 'typeorm';
import Orders from '../entity/Order';
import Products from '../entity/Products';

@EventSubscriber()
class OrderssSubscriber implements EntitySubscriberInterface<Orders> {
  listenTo() {
    return Orders;
  }

  async beforeInsert(event: InsertEvent<Orders>) {
    const qtd = event.entity.askdqtd;
    const num = event.entity.prodId;
    const getPrducts = event.connection.getRepository(Products);
    const avaliableStock = await getPrducts.findOne(num);
    if (avaliableStock && qtd > avaliableStock.qtd) {
      throw new Error('Ops, o estoque é pequeno de mais para nós dois');
    }
  }

  async afterInsert(event:InsertEvent<Orders>) {
    const newqtd = event.entity.askdqtd;
    const prodid = event.entity.prodId;
    const getproduct = event.connection.getRepository(Products);
    const product = await getproduct.findOne(prodid);

    if (!product) {
      throw new Error('Isso não podia ter acontecido');
    }
    product.qtd -= newqtd;
    await getproduct.save(product);
  }
}

export default OrderssSubscriber;
