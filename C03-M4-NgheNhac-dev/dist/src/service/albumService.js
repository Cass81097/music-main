"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Album_1 = require("../entity/Album");
class AlbumService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Album_1.Album);
        this.findAll = async () => {
            return await this.repository.find();
        };
        this.add = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findById = async (id) => {
            return await this.repository.findOne({
                where: {
                    id: id
                }
            });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findByName = async (name) => {
            return await this.repository.createQueryBuilder("album")
                .select([
                "album.id",
                "album.name",
                "album.imgUrl",
                "album.singer"
            ])
                .where("album.name LIKE :name", { name: `%${name}%` })
                .getMany();
        };
    }
}
exports.default = new AlbumService();
//# sourceMappingURL=albumService.js.map