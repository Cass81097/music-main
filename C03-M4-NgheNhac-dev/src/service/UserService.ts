import { User } from "../entity/user";
import { AppDataSource } from "../data-source";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SECRET } from "../middleware/jwt";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    register = async (user: User) => {
        let userObj = this.userRepository.findOne({
            where: {
                username: user.username
            }
        })
        console.log(user.username);
            
        if (user.username == userObj.username) {
            return "Account already exists"
        } else {
            return this.userRepository.save(user);
        }
    
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.findOne({
            where: {
                username: user.username,
            },
        });

        if (!userFind) {
            return 'User does not exist';
        } else {
            if (user.password == userFind.password) {
                const userId = userFind.id; // Lấy ra ID của người dùng
                return `${userId}`;
            } else {
                return 'Password is wrong';
            }
        }
    };


    findAll = async () => {
        return this.userRepository.find()
    }
    findById = async (id) => {
        return this.userRepository.find({
            where: {
                id: id
            }
        })
    }
}

export default new UserService();
