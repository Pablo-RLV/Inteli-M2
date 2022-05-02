const express = require ("express");
const hostname = "127.0.0.1";
const port = 3000;
const app = express();
app.use(express.static("Semana 2"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/curriculo.html");
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});