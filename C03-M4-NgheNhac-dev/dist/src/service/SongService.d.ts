import { Song } from "../entity/Song";
import { Service } from "./Service";
declare class SongService implements Service<Song> {
    private repository;
    findAll: () => Promise<Song[]>;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    findByName: (name: any) => Promise<Song[]>;
    findBySingerName: (singerName: any) => Promise<Song[]>;
    findByAlbumName: (albumName: any) => Promise<Song[]>;
    findByMusicianName: (musicianName: any) => Promise<Song[]>;
    findById: (id: any) => Promise<Song[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findAllByPlaylistId: (idPlaylist: any) => Promise<Song[]>;
    findOneByPlaylistId: (idPlaylist: any, id: any) => Promise<Song[]>;
    findAllByAlbumId: (id: any) => Promise<Song[]>;
    findOneByAlbumId: (idAlbum: any, id: any) => Promise<Song[]>;
    findAllInPlaylistByUser: (userId: any) => Promise<Song[]>;
    findNotInPlaylistId: (idPlaylist: any, id: any) => Promise<Song[]>;
}
declare const _default: SongService;
export default _default;
