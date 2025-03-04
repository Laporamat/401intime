import { Router } from "express";
import fs from "node:fs";
import multer from 'multer'

const filesRouter = Router();
const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, './public')
    },
    filename: (req, file, cb) => {
        const filename = Data.now() + '-' + file.originalname
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

filesRouter.get("/list", (req, res) => {
  fs.readdir("./public", (err, files) => {
    if (err) res.status(500).json({ message: err.message });
    let data = [];
    files.forEach((file) => {
      const obj = { name: file, url: "http://localhost:3000/${file}" };
      data.push(obj);
    });
    res.status(200).json(data);
  });
});

filesRouter.post('/upload', upload.single('test'), (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully' });
});

export default filesRouter;
