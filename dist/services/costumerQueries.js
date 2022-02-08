"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entity/User"));
/* export async function itWillWork() {
  const conn = (await createConnection({
    database: 'teste',
    host: 'localhost',
    type: 'mysql',
    port: 3306,
    username: 'root',
    password: 'Delphini71',
    name: 'default',
    synchronize: true,
    entities: [
      User, Orders, Products,
    ],
  }));
  const vai = await conn.
  getRepository(User).find();

  return vai;
} */
class CostumerQueries {
    constructor() {
        this.getrepoUser = (0, typeorm_1.getRepository)(User_1.default);
        this.conn = (0, typeorm_1.getConnection)().getRepository(User_1.default);
        /* async createUser(
          name: string,
          username:string,
          email:string,
          pass:string,
        ) {
          try {
            (await this.connect).query('INSERT INTO costumers
             (costumer_name, username, email, pass) VALUES (?,?,?,?)', [name, username, email, pass]);
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
            (await this.connect).query('UPDATE costumers SET pass =
             ? WHERE costumer_id = ?', [newPass, id]);
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
        } */
    }
    seeUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.conn.find();
                return data;
            }
            catch (e) {
                console.log(e);
                throw new Error('Ops, algo deu errado');
            }
        });
    }
}
exports.default = CostumerQueries;
