const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


const cors = require("cors");
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


app.use("/public", express.static(path.join(__dirname, "public")));
//routes
const productRoutes = require(path.join(__dirname, "routes", "product", "index"));
app.use("/product", productRoutes);

const categoryRoutes = require(path.join(__dirname, "routes", "category", "index"));
app.use("/category", categoryRoutes);

const userRoutes = require(path.join(__dirname, "routes", "user", "index.js"));
app.use("/user", userRoutes)

const reviewRoutes = require(path.join(__dirname, "routes", "review", "index"));
app.use("/review", reviewRoutes);

const orderRoutes = require(path.join(__dirname, "routes", "order", "index"));
app.use("/order", orderRoutes);


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


