import { createServer } from "http";
import dotenv from "dotenv";
import { DataBase } from './database';

dotenv.config();

const database = new DataBase();

const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method == 'GET') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(JSON.stringify({ users: database.getUsers() }));
        res.end();
    }


});

server.listen(process.env.PORT);

console.log(`Server running at http://127.0.0.1:${process.env.PORT}/`);;
