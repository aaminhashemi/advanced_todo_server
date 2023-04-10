const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, "name is require!!"],
        maxlength: [20, "your name should be 20 characters"],
    },
    age: {
        type: String,
        require: [true, "age is require!!"],
        maxlength: [100, "your age should be 20 characters"],
    },
    imageUrl: {
        type: String,
        require: [true, "image is require!!"],
        maxlength: [100, "your image should be uploaded"],
    },
    skills: {
        type: [String],
        require: [true, "skills is require!!"],
        maxlength: [100, "your skills should be 20 characters"],
    },
    linkedIn_address: {
        type: String,
        require: [true, "linkedIn  is require!!"],
        maxlength: [100, "your linkedIn should be 20 characters"],
    },
    github_address: {
        type: String,
        require: [true, "Github  is require!!"],
        maxlength: [100, "your Github  should be 20 characters"],
    },
    todos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }],
});

module.exports = model("User", UserSchema);
