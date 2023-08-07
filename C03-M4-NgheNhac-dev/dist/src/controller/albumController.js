"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const albumService_1 = __importDefault(require("../service/albumService"));
class AlbumController {
    constructor() {
        this.findAll = async (req, res) => {
            let { id, name } = req.query;
            if (id == undefined && name == undefined) {
                let data = await albumService_1.default.findAll();
                res.json(data);
            }
            else if (id != undefined && name == undefined) {
                let data = await albumService_1.default.findById(id);
                res.json(data);
            }
            else if (id == undefined && name != undefined) {
                let data = await albumService_1.default.findByName(name);
                res.json(data);
            }
        };
        this.update = async (req, res) => {
            let object = await albumService_1.default.update(req.params.id, req.body);
            res.json(object);
        };
        this.delete = async (req, res) => {
            let data = await albumService_1.default.delete(req.params.id);
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await albumService_1.default.add(req.body);
            res.json(data);
        };
    }
}
exports.default = new AlbumController();
//# sourceMappingURL=albumController.js.map