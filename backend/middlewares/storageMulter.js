import multer from "multer";


// Image storage
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
export const upload = multer({ storage }).single("file");

