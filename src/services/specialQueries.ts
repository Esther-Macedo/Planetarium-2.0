import connectToDatabase from '../Configs/db';

class SpecialQueries {
  connect = connectToDatabase();

  async getCostumerByOrderId(id:number) {
    try {
      return (await this.connect).query(`SELECT orders.order_id, costumers.costumer_id, costumers.costumer_name
      from orders
      join costumers
      on orders.cost_id=costumers.costumer_id WHERE order_id = ${id}`);
    } finally {
      (await this.connect).end();
    }
  }

  async getAllCostumersByOrderId() {
    try {
      return (await this.connect).query('SELECT orders.order_id, costumers.costumer_id, costumers.costumer_name, costumers.email from orders join costumers on orders.cost_id=costumers.costumer_id;');
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async getProductByOrderId(id: number) {
    try {
      return (await this.connect).query(`SELECT orders.order_id, products.product_name, products.details FROM orders JOIN products ON orders.prod_id = products.product_id WHERE orders.order_id = ${id}`);
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async getAllProductsByOrderId() {
    try {
      return (await this.connect).query('SELECT orders.order_id, products.product_name, products.details FROM orders JOIN products ON orders.prod_id = products.product_id');
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }
}

export default SpecialQueries;
