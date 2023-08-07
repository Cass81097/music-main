import { User } from "../entity/user";
declare class UserService {
    private userRepository;
    constructor();
    register: (user: User) => Promise<any>;
    checkUser: (user: any) => Promise<string>;
    findAll: () => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
