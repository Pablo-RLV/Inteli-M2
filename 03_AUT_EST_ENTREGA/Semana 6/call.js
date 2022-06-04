const express = require ("express");

const hostname = "127.0.0.1";
const port = 3000;  

const app = express(); 

app.use(express.static("public"));

app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/public/curriculo.html");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});