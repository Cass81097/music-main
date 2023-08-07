declare class SongController {
    add: (req: any, res: any) => Promise<void>;
    update: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
    findAllById: (req: any, res: any) => Promise<void>;
    findOneByName: (req: any, res: any) => Promise<void>;
}
declare const _default: SongController;
export default _default;
