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
/* import bcrypt from 'bcrypt'; */
const costumerQueries_1 = __importDefault(require("../services/costumerQueries"));
class CostumerController {
    constructor() {
        this.costumerQuery = new costumerQueries_1.default();
    }
    /* socorro = itWillWork(); */
    /* public static async addNewUser(req: Request, res: Response) {
      try {
        const hash = bcrypt.hashSync(req.body.pass, 10);
        await new CostumerQueries().createUser(
          req.body.name,
          req.body.username,
          req.body.email,
          hash,
        );
        res.send('usuario criado').status(201);
      } catch (e) {
        res.send('algo deu errado').status(500);
      }
    } */
    /*  public static async updateUser(req: Request, res:Response) {
      try {
        await new CostumerQueries().updateUser(req.body, parseInt(req.params.id, 10));
        if (req.body.pass) {
          const hash = bcrypt.hashSync(req.body.pass, 10);
          await new CostumerQueries().updatePassword(hash, parseInt(req.params.id, 10));
        }
        res.send('informações atualizadas').status(200);
      } catch (e) {
        res.send('algo deu errado').status(500);
      }
    } */
    /*  public static async deleteUser(req: Request, res:Response) {
      try {
        await new CostumerQueries().delelteUser(parseInt(req.params.id, 10));
        res.send('Usuario deletado').status(200);
      } catch (e) {
        res.send('algo deu errado').status(500);
      }
    } */
    allUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.costumerQuery.seeUsers();
                res.json(data);
            }
            catch (e) {
                console.log(e);
                res.send('algo deu errado').status(500);
            }
        });
    }
}
exports.default = CostumerController;
