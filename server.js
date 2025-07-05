
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const whitelistOrigin = ["http://localhost:3000", "https://coffela.vercel.app/"]
const port = process.env.PORT;
const mongooseUri = process.env.MONGO_URL;
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (whitelistOrigin.includes(origin)) {
            return callback(null, true);

        } else {
            return callback(new Error("Not allowrd by CORS"));
        }
    },// ✅ allow your frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true // if you use cookies or auth headers
}));
app.use(express.json());
app.use(express.urlencoded())
const mongoose = require("mongoose");



app.use("/", require(path.join(__dirname, "routes", "root.js")))


mongoose.connect(mongooseUri, {
    // useNewUrlParser: true, (mongose updated and unnecessary)
    // useUnifiedTopology: true,  (mongose updated and unnecessary)

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

const protectedRoutes = require(path.join(__dirname, "routes", "protected", "index"));
app.use("/protected", protectedRoutes);


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


// app.listen(() => console.log(path.join(__dirname, "routes", "root.js")))
