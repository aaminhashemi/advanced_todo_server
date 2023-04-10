const Todo = require('./../models/Todo')
const User = require('./../models/User');
const History = require('./../models/History');

const getAllHistories = async (req, res) => {
    try {
        const histories = await History.find().populate('user');
        res.status(201).json(histories);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Server error'});
    }
}
const deleteHistory=async (req,res)=>{
    try {
        const {id} = req.params;
        const histories = await History.deleteOne({_id: id});
        return res.status(200).json(histories);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
module.exports = {getAllHistories,deleteHistory}