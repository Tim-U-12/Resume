import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get('/projects', (req, res) => {
    res.render("projects.ejs")
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Page is running on port ${port}`)
});