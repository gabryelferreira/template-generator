import express from 'express';

async function bootstrap() {
    const app = express();
    app.use(express.json());
    app.listen(3333);
}

bootstrap();