



// Configure multer storage
// const imageStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads')); // Adjust the path as needed
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '_' + Date.now() + '-' + file.originalname);
//   }
// });
// const upload = multer({ 
//   storage: storage, 
//   limits:{
//     fileSize: 1000000 // 1000000 Bytes = 1 MB
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(png|jpg)$/)) { 
//        // upload only png and jpg format
//        return cb(new Error('Please upload a Image'))
//      }
//    cb(undefined, true)
// }
// });

const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  // Destination to store image     
  destination: "uploads", 
    filename: (req, file, cb) => {
        cb(
          null,
           file.fieldname + '_' + Date.now() 
           + path.extname(file.originalname))
          // file.fieldname is name of the field (image)
          // path.extname get the uploaded file extension
  }
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1024 * 1024 * 10 // 10 MB (adjust the size as needed)
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Image'))
     }
   cb(undefined, true)
}
}) 


module.exports = imageUpload;



