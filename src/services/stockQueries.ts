import connectToDatabase from './db';

class SotckQueries {
  public static async createStock(
    title: string,
    author:string,
    description:string,
    release:string,
  ) {
    const connect = await connectToDatabase();
    connect.query('INSERT INTO products(title, author, description, release_date) USER VALUES(?,?,?,?)', [title, author, description, release]);
  }
}

export default SotckQueries;
