import { createServer } from 'http';
import { readFile } from "fs";


const hostname = '::';
const port = 3000;

const prepareResponse = (_, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' })
    readFile('index.html', (error, data) => {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    })
}

const server = createServer(prepareResponse);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})