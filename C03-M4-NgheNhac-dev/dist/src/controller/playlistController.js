"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playlistService_1 = __importDefault(require("../service/playlistService"));
class PlaylistController {
    constructor() {
        this.findAll = async (req, res) => {
            let { userId, asc, desc, id } = req.query;
            if (userId == undefined && asc == undefined && desc == undefined && id == undefined) {
                let list = await playlistService_1.default.findAll();
                res.json(list);
            }
            else if (userId != undefined && asc == undefined && desc == undefined && id == undefined) {
                let list = await playlistService_1.default.findByUserName(Number(userId));
                res.json(list);
            }
            else if (userId == undefined && asc == '' && desc == undefined && id == undefined) {
                let list = await playlistService_1.default.getSortByAsc();
                res.json(list);
            }
            else if (userId == undefined && asc == undefined && desc == '' && id == undefined) {
                let list = await playlistService_1.default.getSortByDesc();
                res.json(list);
            }
            else if (userId == undefined && asc == undefined && desc == undefined && id != undefined) {
                let list = await playlistService_1.default.findById(id);
                res.json(list);
            }
        };
        this.add = async (req, res) => {
            let data = await playlistService_1.default.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await playlistService_1.default.update(req.params.id, req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await playlistService_1.default.delete(req.params.id);
            res.json(data);
        };
    }
}
exports.default = new PlaylistController();
//# sourceMappingURL=playlistController.js.map