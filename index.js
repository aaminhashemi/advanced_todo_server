const express = require('express')
const dotenv=require('dotenv');
const cors = require("cors");
const bodyParser=require('body-parser')
const connect=require('./database/connect')
const UserRoutes = require("./routes/UserRoutes");
const TodoRoutes = require("./routes/TodoRoutes");
const HistoryRoutes = require("./routes/HistoryRoutes");
dotenv.config();
const app = express()

app.use('/uploads',express.static('uploads'))
app.use(cors(), bodyParser.urlencoded({ extended: true }),bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;
app.use("/user", UserRoutes);
app.use("/todo", TodoRoutes);
app.use("/history", HistoryRoutes);
const start = async () => {
    try {
        await connect(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log("The server running on port:", PORT);
        });
    } catch (error) {
        console.log(error);
    }
};
start();