import { getRepository, Repository } from 'typeorm';
import { User } from '../entity/User';
import { CreateUserDTO } from '../models/dto/createUserDTO';

export default class UserRepository {

    repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create(user: CreateUserDTO): Promise<User> {
        return this.repository.save(user);
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.repository.findOne({ where: { username } });
    }

}