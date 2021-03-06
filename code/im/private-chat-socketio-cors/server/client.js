const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const PORT = 30011;

app.use(express.static(path.join(__dirname, '../', 'public')));

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
