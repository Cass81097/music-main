"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
const session = require('express-session');
class UserController {
    constructor() {
        this.register = async (req, res) => {
            await UserService_1.default.register(req.body);
            res.status(201).json('Create user success');
        };
        this.login = async (req, res) => {
            let resultCheck = await UserService_1.default.checkUser(req.body);
            res.status(200).json(resultCheck);
        };
        this.findAll = async (req, res) => {
            let data = await UserService_1.default.findAll();
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await UserService_1.default.findById(req.params.id);
            res.json(data);
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map