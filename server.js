import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Access the APP_NAME environment variable
const appName = process.env.APP_NAME;
console.log(`Application Name: ${appName}`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MyServer = express();

MyServer.get('/', (request, response) => {
    response.status(200).sendFile(path.join(__dirname, 'Index.html'));
    console.log(`Request Served by ${appName}`)
});

MyServer.listen(7000, () => {
    console.log(`${appName}Listening on Port 7000`);
});