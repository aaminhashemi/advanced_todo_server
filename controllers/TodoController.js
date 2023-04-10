const Todo = require('./../models/Todo')
const User = require('./../models/User');
const History = require('./../models/History');

const createNewTodo = async (req, res) => {
    const {user_id} = req.body;
    try {
        const user = await User.findById({_id: user_id});
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        const todo = new Todo({title: req.body.title, user: user_id});
        await todo.save();
        user.todos.push(todo._id);
        await user.save();

        const history=new History({todo_title:req.body.title,todo_status:'added',user:user_id});
        await history.save();

        res.status(201).json({message: 'Todo created successfully', todo});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
}
const getTodos = async (req, res) => {
    try {
        const user = await User.findById({_id: user_id});
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }
        const todo = new Todo({title: req.body.title});
        await todo.save();
        user.todos.push(todo);
        await user.save();
        res.status(201).json({message: 'Todo created successfully', todo});
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
}
const getTodosWithUser = async (req, res) => {
    const todos=await Todo.find()
        .populate('user') // populate the user field with the name field of the User model
        .then(
            (response) => {
            return res.status(201).json(response)
        }).catch((err) => {
            return res.status(500).json({msg: 'err'})
        });

}
const deleteTodo=async (req,res)=>{
    try {
        const {id} = req.params;
        const todo = await Todo.findById({_id: id});
        const history=new History({todo_title:todo.title,todo_status:'deleted',user:'643145b6e006bc4786fa7d54'});
        await history.save();
        const todos = await Todo.deleteOne({_id: id});
        return res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
module.exports = {createNewTodo, getTodos, getTodosWithUser,deleteTodo}