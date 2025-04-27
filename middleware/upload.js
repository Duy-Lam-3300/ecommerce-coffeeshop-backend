const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLocaleLowerCase();
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("Only images are allowed (.jpg, .jpeg, .png)"), false);
        } else {
            cb(null, true);
        }
    }
})

module.exports = upload;