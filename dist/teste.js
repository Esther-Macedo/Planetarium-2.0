"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Order_1 = __importDefault(require("./entity/Order"));
const Products_1 = __importDefault(require("./entity/Products"));
const User_1 = __importDefault(require("./entity/User"));
(0, typeorm_1.createConnection)({
    database: 'planetas',
    type: 'mysql',
    username: 'root',
    password: 'Delphini71',
    host: 'localhost',
    entities: [User_1.default, Products_1.default, Order_1.default],
    synchronize: false,
    name: 'default',
});
