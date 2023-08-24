import { createServer } from 'http';

const hostname = '::';
const port = 3000;

const prepareResponse = (_, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
}

const server = createServer(prepareResponse);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})