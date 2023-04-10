const {Router} = require('express')
const {createNewUser, getUsers, deleteUser} = require('./../controllers/UserController')
const multer = require("multer");
const upload = multer({dest: './uploads/'})

const router = Router();
//console.log(createNewUser)
/*router.post('/create', upload.single('image'), (req, res) => {
    console.log(req.file); // this should log the uploaded file object
    //createNewUser
})*/
router.post('/create', upload.single('image'), createNewUser)
router.get('/', getUsers)
router.delete('/:id', deleteUser)

module.exports = router