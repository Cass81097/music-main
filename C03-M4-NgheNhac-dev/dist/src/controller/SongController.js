"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SongService_1 = __importDefault(require("../service/SongService"));
class SongController {
    constructor() {
        this.add = async (req, res) => {
            let data = await SongService_1.default.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await SongService_1.default.update(req.params.id, req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await SongService_1.default.delete(req.params.id);
            res.json(data);
        };
        this.findAllById = async (req, res) => {
            let { id, idPlaylist, idAlbum, idUser } = req.query;
            if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser == undefined) {
                let data = await SongService_1.default.findAll();
                res.json(data);
            }
            else if (idPlaylist != undefined && id == undefined && idAlbum == undefined && idUser == undefined) {
                let data = await SongService_1.default.findAllByPlaylistId(idPlaylist);
                res.json(data);
            }
            else if (idPlaylist == undefined && id != undefined && idAlbum == undefined && idUser == undefined) {
                let data = await SongService_1.default.findById(id);
                res.json(data);
            }
            else if (idPlaylist != undefined && id != undefined && idAlbum == undefined && idUser == undefined) {
                if (id == 0) {
                    let data = await SongService_1.default.findNotInPlaylistId(Number(idPlaylist), Number(id));
                    res.json(data);
                }
                else {
                    let data = await SongService_1.default.findOneByPlaylistId(Number(idPlaylist), Number(id));
                    res.json(data);
                }
            }
            else if (idPlaylist == undefined && id == undefined && idAlbum != undefined && idUser == undefined) {
                let data = await SongService_1.default.findAllByAlbumId(idAlbum);
                res.json(data);
            }
            else if (idPlaylist == undefined && id != undefined && idAlbum != undefined && idUser == undefined) {
                let data = await SongService_1.default.findOneByAlbumId(Number(idAlbum), Number(id));
                res.json(data);
            }
            else if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser != undefined) {
                let data = await SongService_1.default.findAllInPlaylistByUser(idUser);
                res.json(data);
            }
        };
        this.findOneByName = async (req, res) => {
            let { song, singer, album, musician } = req.query;
            if (song != undefined && singer == undefined && album == undefined && musician == undefined) {
                let data = await SongService_1.default.findByName(song);
                res.json(data);
            }
            else if (song == undefined && singer != undefined && album == undefined && musician == undefined) {
                let data = await SongService_1.default.findBySingerName(singer);
                res.json(data);
            }
            else if (song == undefined && singer == undefined && album != undefined && musician == undefined) {
                let data = await SongService_1.default.findByAlbumName(album);
                res.json(data);
            }
            else if (song == undefined && singer == undefined && album == undefined && musician != undefined) {
                let data = await SongService_1.default.findByMusicianName(musician);
                res.json(data);
            }
        };
    }
}
exports.default = new SongController();
//# sourceMappingURL=SongController.js.map