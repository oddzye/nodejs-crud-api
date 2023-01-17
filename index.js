import { createServer } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const server = createServer((req, res) => {
    console.log(req);
});

server.listen(process.env.PORT);