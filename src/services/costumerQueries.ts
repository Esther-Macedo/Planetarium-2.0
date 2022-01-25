import connectToDatabase from '../Configs/db';

class CostumerQueries {
  connect = connectToDatabase();

  async createUser(
    name: string,
    username:string,
    email:string,
    pass:string,
  ) {
    try {
      (await this.connect).query('INSERT INTO costumers (costumer_name, username, email, pass) VALUES (?,?,?,?)', [name, username, email, pass]);
    } finally {
      (await this.connect).end();
    }
  }

  async updateUser(toChange:string, id:number) {
    try {
      (await this.connect).query('UPDATE costumers SET ? WHERE costumer_id = ?', [toChange, id]);
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async updatePassword(newPass:string, id:number) {
    try {
      (await this.connect).query('UPDATE costumers SET pass = ? WHERE costumer_id = ?', [newPass, id]);
    } catch (e) {
      throw new Error('Algo deu errado');
    } finally {
      (await this.connect).end();
    }
  }

  async delelteUser(id:number) {
    try {
      (await this.connect).query('DELETE FROM costumers WHERE costumer_id = ?', [id]);
    } catch (e) {
      throw new Error('Algo deu Errado');
    } finally {
      (await this.connect).end();
    }
  }

  async seeUsers() {
    try {
      return (await this.connect).query('SELECT * FROM costumers');
    } catch (e) {
      throw new Error('Algo deu Errado');
    } finally {
      (await this.connect).end();
    }
  }
}

export default CostumerQueries;
