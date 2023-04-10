const {Router} = require('express')
const {createNewTodo,getTodosWithUser,deleteTodo} =require('./../controllers/TodoController')
const {deleteUser} = require("./../controllers/UserController");

const router = Router();

router.post('/create', createNewTodo)
router.get('/', getTodosWithUser)
router.delete('/:id', deleteTodo)


module.exports=router