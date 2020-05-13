import express from 'express';
import UserController from './controller/UserController';

const ROUTER = express.Router();

export default class Routes {

    userController: UserController;

    constructor() {
        this.userController = new UserController();
    }
    
    get routes() {
        ROUTER.post("/", this.userController.create.bind(this.userController));
        return ROUTER;
    }

}