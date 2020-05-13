import express from 'express';
import 'express-async-errors';
import { createConn } from './db/createConn';
import Routes from './routes';
import { errorHandler } from './utils/errorHandler';

async function bootstrap() {
    const app = express();
    app.use(express.json());
    await createConn();
    const routes = new Routes().routes;
    app.use(routes);

    app.use(errorHandler);

    app.listen(3333);
}

bootstrap();