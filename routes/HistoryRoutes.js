const {Router} = require('express')
const {getAllHistories,deleteHistory} =require('./../controllers/HistoryController')
const {deleteUser} = require("./../controllers/UserController");

const router = Router();

router.get('/', getAllHistories)
router.delete('/:id', deleteHistory)


module.exports=router