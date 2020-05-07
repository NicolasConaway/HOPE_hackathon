const express = require('express');
const path = require('path');

const server = express();
server.use('/static', express.static('public'))

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
});




// Creating the server 
const port = process.env.PORT || 2000;
server.listen(port, () => {
    console.log(`This server is running on ${port}`)
})

