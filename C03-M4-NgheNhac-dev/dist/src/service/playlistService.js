"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const playlist_1 = require("../entity/playlist");
class PlaylistService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(playlist_1.Playlist);
        this.findAll = async () => {
            return await this.repository.createQueryBuilder("playlist")
                .leftJoinAndSelect("playlist.user", "user")
                .select([
                "playlist.id",
                "playlist.name",
                "playlist.imgUrl",
                "playlist.description",
                "user.username",
                "user.imgUrl"
            ])
                .orderBy("playlist.id", "ASC")
                .getMany();
        };
        this.add = async (playlist) => {
            return await this.repository.save(playlist);
        };
        this.delete = async (playlistId) => {
            return await this.repository.delete(playlistId);
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
        this.findByUserName = async (userId) => {
            return await this.repository.createQueryBuilder("playlist")
                .leftJoinAndSelect("playlist.user", "user")
                .select([
                "playlist.id",
                "playlist.name",
                "playlist.imgUrl",
                "playlist.description",
                "user.username",
                "user.imgUrl"
            ])
                .where("user.id = :userId", { userId })
                .getMany();
        };
        this.getSortByAsc = async () => {
            return await this.repository.createQueryBuilder("playlist")
                .orderBy("playlist.name", "ASC")
                .getMany();
        };
        this.getSortByDesc = async () => {
            return await this.repository.createQueryBuilder("playlist")
                .orderBy("playlist.name", "DESC")
                .getMany();
        };
    }
}
exports.default = new PlaylistService();
//# sourceMappingURL=playlistService.js.map