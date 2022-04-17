require('../config/config');

const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);

app.use(express.static(publicPath));

server.listen(PORT, (err) => console.log(`Geometric Wave Level Building Tool is up and running on localhost:${PORT}`));
