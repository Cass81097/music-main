"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Song_1 = require("../entity/Song");
class SongService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Song_1.Song);
        this.findAll = async () => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
                .getMany();
        };
        this.add = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findByName = async (name) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
                .where("song.name LIKE :name", { name: `%${name}%` })
                .getMany();
        };
        this.findBySingerName = async (singerName) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
                .where("song.singer LIKE :name", { name: `%${singerName}%` })
                .getMany();
        };
        this.findByAlbumName = async (albumName) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
                .where("album.name LIKE :name", { name: `%${albumName}%` })
                .getMany();
        };
        this.findByMusicianName = async (musicianName) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
                .where("song.musician LIKE :name", { name: `%${musicianName}%` })
                .getMany();
        };
        this.findById = async (id) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
                .where("song.id = :id", { id })
                .getMany();
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findAllByPlaylistId = async (idPlaylist) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.playlist", "playlist")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "playlist.name",
                "playlist.imgUrl"
            ])
                .where("playlist.id = :idPlaylist", { idPlaylist })
                .getMany();
        };
        this.findOneByPlaylistId = async (idPlaylist, id) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.playlist", "playlist")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "playlist.name",
                "playlist.imgUrl"
            ])
                .where("playlist.id = :idPlaylist", { idPlaylist })
                .andWhere("song.id = :id", { id })
                .getMany();
        };
        this.findAllByAlbumId = async (id) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "album.imgUrl",
                "album.singer"
            ])
                .where("album.id = :id", { id })
                .getMany();
        };
        this.findOneByAlbumId = async (idAlbum, id) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.album", "Album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "album.imgUrl",
                "album.singer"
            ])
                .where("album.id = :idAlbum", { idAlbum })
                .andWhere("song.id = :id", { id })
                .getMany();
        };
        this.findAllInPlaylistByUser = async (userId) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.playlist", "playlist")
                .leftJoinAndSelect("playlist.user", "user")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "album.singer",
                "playlist.name",
                "playlist.imgUrl",
                "playlist.description",
                "user.username",
                "user.imgUrl"
            ])
                .where("user.id = :userId", { userId })
                .getMany();
        };
        this.findNotInPlaylistId = async (idPlaylist, id) => {
            return await this.repository.createQueryBuilder("song")
                .leftJoinAndSelect("song.playlist", "playlist")
                .leftJoinAndSelect("song.album", "album")
                .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "playlist.name",
                "playlist.imgUrl"
            ])
                .where("playlist.id <> :idPlaylist", { idPlaylist })
                .getMany();
        };
    }
}
exports.default = new SongService();
//# sourceMappingURL=SongService.js.map