const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const HistorySchema = new Schema({
    todo_title: {
        type: String,
        require: [true, "name is require!!"],
        maxlength: [20, "your name should be 20 characters"],
    },
    todo_status: {
        type: String,
        enum: ['added', 'deleted', 'edited', 'completed'],
        default: 'added',
        require: [true, "status is require!!"],
        maxlength: [100, "your status should be 20 characters"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    datetime: {
        type: Date,
        required: true,
        default: Date.now
    }
});
HistorySchema.virtual('userName').get(async function () {
    const user = await mongoose.model('User').findById(this.user);
    return `${user.name}`;
});
module.exports = model("History", HistorySchema);
