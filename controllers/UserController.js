const User = require('./../models/User');
const Todo = require('./../models/Todo');

const createNewUser = async (req, res) => {
    console.log(req.body.skills)
    try {
        const newUser = new User({
            name: req.body.name,
            age: req.body.age,
            linkedIn_address: req.body.linkedIn_address,
            github_address: req.body.github_address,
            skills: req.body.skills.split(","),
            imageUrl: req.file.path
        })
        const Users = await newUser.save()
        return res.status(201).json(Users)
    } catch (err) {
        res.status(500).json({msg: err})
    }
}
const getUsers = async (req, res) => {
    try {
        const Users = await User.find().populate('todos')
        return res.status(200).json(Users)
    } catch (err) {
        res.status(500).json({msg: err})
    }
}
const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({_id: id});
        Todo.find({ user: user }, function(err, posts) {
            if (err) {
                console.log(err);
            } else {
                posts.forEach(function(post) {
                    post.remove();
                });
                console.log(posts.length + " documents deleted");
            }
        });
        const users = await User.deleteOne({_id: id});

        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

module.exports = {createNewUser, getUsers, deleteUser}