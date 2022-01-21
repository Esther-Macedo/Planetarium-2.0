import connectToDatabase from './db';

class CostumerQueries {
  public static async createUser(
    id:number,
    fristN: string,
    lastN:string,
    email:string,
    pass:string,
  ) {
    const connect = await connectToDatabase();
    connect.query('INSERT INTO USER VALUES(?,?,?,?,?)', [id, fristN, lastN, email, pass]);
  }
}

export default CostumerQueries;
