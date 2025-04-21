const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
    res.send("hello word");
})




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


