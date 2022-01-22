import connectToDatabase from './db';

class SpecialQueries {
  connect = connectToDatabase();

  async getCostumerByOrderId(id:number) {
    try {
      return (await this.connect).query(`SELECT orders.order_id, costumers.costumer_id, costumers.costumer_name
      from orders
      join costumers
      on orders.costumer_id=costumers.costumer_id WHERE order_id = ${id}`);
    } finally {
      (await this.connect).end();
    }
  }

  async getAllCostumersByOrderId() {
    try {
      return (await this.connect).query('SELECT orders.order_id, costumers.costumer_id, costumers.costumer_name from orders join costumers  on orders.costumer_id=costumers.costumer_id;');
    } finally {
      (await this.connect).end();
    }
  }

  async getProductByOrderId(id: number) {
    try {
      return (await this.connect).query(`SELECT orders.order_id, products.title, products.detail FROM orders JOIN products ON orders.product_id = products.product_id WHERE orders.order_id = ${id}`);
    } finally {
      (await this.connect).end();
    }
  }

  async getAllProductsByOrderId() {
    try {
      return (await this.connect).query('SELECT orders.order_id, products.title, products.detail FROM orders JOIN products ON orders.product_id = products.product_id');
    } finally {
      (await this.connect).end();
    }
  }
}

export default SpecialQueries;
