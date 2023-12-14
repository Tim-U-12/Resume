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

app.listen(port, () => {
    console.log(`Webpage is running on port ${port}`)
});