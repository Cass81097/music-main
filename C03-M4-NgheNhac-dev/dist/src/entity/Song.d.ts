import { Album } from "./Album";
import { Playlist } from "./playlist";
export declare class Song {
    id: number;
    name: string;
    singer: string;
    musician: string;
    songUrl: string;
    imageUrl: string;
    album: Album;
    playlist: Playlist;
}
