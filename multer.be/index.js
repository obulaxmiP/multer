const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Route for upload
app.post("/upload", upload.single("myFile"), (req, res) => {
    res.json({ message: "File uploaded successfully", file: req.file });
});

app.listen(5000, () => console.log("Server running on port 5000"));
