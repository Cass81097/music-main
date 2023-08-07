import { Album } from "../entity/Album";
import { Service } from "./Service";
declare class AlbumService implements Service<Album> {
    private repository;
    findAll: () => Promise<Album[]>;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    findById: (id: any) => Promise<Album>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByName: (name: any) => Promise<Album[]>;
}
declare const _default: AlbumService;
export default _default;
