"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Products_1 = __importDefault(require("./Products"));
const User_1 = __importDefault(require("./User"));
let Orders = class Orders {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Orders.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Orders.prototype, "prodId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Products_1.default, (product) => product.orders),
    (0, typeorm_1.JoinColumn)({ name: 'prodId' }),
    __metadata("design:type", Products_1.default)
], Orders.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Orders.prototype, "costId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.default, (costumer) => costumer.orders),
    (0, typeorm_1.JoinColumn)({ name: 'costId' }),
    __metadata("design:type", User_1.default)
], Orders.prototype, "costumer", void 0);
Orders = __decorate([
    (0, typeorm_1.Entity)()
], Orders);
exports.default = Orders;
