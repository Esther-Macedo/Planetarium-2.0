import connectToDatabase from './db';

class SotckQueries {
  public static async createStock(
    title: string,
    author:string,
    detail:string,
    release:string,
  ) {
    const connect = await connectToDatabase();
    connect.query('INSERT INTO products(title, author, detail, release_date) VALUES(?,?,?,?)', [title, author, detail, release]);
    connect.end();
  }
}

export default SotckQueries;
