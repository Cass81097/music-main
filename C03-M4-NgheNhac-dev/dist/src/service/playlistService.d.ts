import { Playlist } from "../entity/playlist";
import { Service } from "./Service";
declare class PlaylistService implements Service<Playlist> {
    private repository;
    findAll: () => Promise<Playlist[]>;
    add: (playlist: any) => Promise<any>;
    delete: (playlistId: any) => Promise<import("typeorm").DeleteResult>;
    findById: (id: any) => Promise<Playlist>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByUserName: (userId: any) => Promise<Playlist[]>;
    getSortByAsc: () => Promise<Playlist[]>;
    getSortByDesc: () => Promise<Playlist[]>;
}
declare const _default: PlaylistService;
export default _default;
