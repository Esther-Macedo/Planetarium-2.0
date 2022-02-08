import { getRepository } from 'typeorm';
import Orders from '../entity/Order';

class SpecialQueries {
  ordesrrepo = getRepository(Orders);

  async getCostumerByOrderId(ordid:number) {
    const thisCostumer = await this.ordesrrepo.find({
      where: {
        id: ordid,
      },
      relations: ['costumer'],
    });
    return thisCostumer;
  }

  async getAllCostumersByOrderId() {
    try {
      const theseCostumers = await this.ordesrrepo.find({ relations: ['cosutmer'] });
      return theseCostumers;
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }

  async getProductByOrderId(ordid: number) {
    try {
      const thisproduct = await this.ordesrrepo.find({
        where: {
          id: ordid,
        },
        relations: ['product'],
      });
      return thisproduct;
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }

  async getAllProductsByOrderId() {
    try {
      const theseproducts = await this.ordesrrepo.find({ relations: ['product'] });
      return theseproducts;
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }
}

export default SpecialQueries;
