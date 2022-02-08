import { getRepository } from 'typeorm';
import Products from '../entity/Products';

class GateKeeper {
  getProd = getRepository(Products);

  async checkqtd(qtd:number, prodId:number) {
    const product = await this.getProd.findOne(prodId);
    if (!product) {
    // colocando só pra saber a diferença entre dar throw num error
    // e dar throw num new Error
      throw Error('Ops, isso não deveria ter acontecido');
    }
    if (product.qtd < qtd) {
      throw Error('Nosso estoque é pequeno demais para satifazer sua megalomania');
    }
    product.qtd -= qtd;
    await this.getProd.save(product);
  }
}
export default GateKeeper;
