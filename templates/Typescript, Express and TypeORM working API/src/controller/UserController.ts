import { Request, Response } from "express";
import UserRepository from "../repository/UserRepository";
import { CreateUserDTO } from "../models/dto/createUserDTO";
import validateModel from "../utils/validateModel";
import { HttpException } from "../models/httpException";
import { HttpStatus } from "../utils/constants/httpStatus";

export default class UserController {

    userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(req: Request, res: Response) {
        const requestUser = new CreateUserDTO(req.body);
        await validateModel(requestUser);
        
        const usernameAlreadyTaken = !!(await this.userRepository.findByUsername(requestUser.username));
        if (usernameAlreadyTaken) {
            throw new HttpException("Username already taken", HttpStatus.BAD_REQUEST);
        }
        const user = await this.userRepository.create(requestUser);
        return res.json(user);
    }

}