"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.register = async (user) => {
            let userObj = this.userRepository.findOne({
                where: {
                    username: user.username
                }
            });
            console.log(user.username);
            if (user.username == userObj.username) {
                return "Account already exists";
            }
            else {
                return this.userRepository.save(user);
            }
        };
        this.checkUser = async (user) => {
            let userFind = await this.userRepository.findOne({
                where: {
                    username: user.username,
                },
            });
            if (!userFind) {
                return 'User does not exist';
            }
            else {
                if (user.password == userFind.password) {
                    const userId = userFind.id;
                    return `${userId}`;
                }
                else {
                    return 'Password is wrong';
                }
            }
        };
        this.findAll = async () => {
            return this.userRepository.find();
        };
        this.findById = async (id) => {
            return this.userRepository.find({
                where: {
                    id: id
                }
            });
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map