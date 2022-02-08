import { getRepository } from 'typeorm';
import Products from '../entity/Products';

type celestialBody = {
  productname:string;
  type: string;
  lifesupport:string;
  details: string;
  qtd:number;
}
class SotckQueries {
  productRepo = getRepository(Products);

  public async createStock({
    productname, type, lifesupport, details, qtd,
  }:celestialBody) {
    try {
      const newAstro = this.productRepo.create({
        productname, type, lifesupport, details, qtd,
      });

      await this.productRepo.save(newAstro);
    } catch (e) {
      throw new Error('Algo deu errado');
    }
  }

  public async seeStock() {
    try {
      const stock = await this.productRepo.find();
      return stock;
    } catch (e) {
      console.log(e);
      throw new Error('Ops, algo deu errado');
    }
  }
}

export default SotckQueries;
