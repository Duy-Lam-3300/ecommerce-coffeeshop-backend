const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


const cors=require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded())

app.use("/", require(path.join(__dirname, "routes", "root.js")))

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => console.log("Mongo connected")).catch(err => console.error("Mongo Error", err))

//routes
const coffeeRoutes = require(path.join(__dirname, "routes", "coffee", "index"));
app.use("/coffee", coffeeRoutes);



//default
app.all("{*splash}", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "views", "root", "404.html"))
    }
    else if (req.accepts("json")) {
        res.json({ error: "404 not found." })
    } else {
        res.type("txt").send("404 not found.")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


