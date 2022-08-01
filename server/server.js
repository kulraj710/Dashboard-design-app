const express = require('express')
const mongoose = require('mongoose')
const Route = require('./routes')
require('dotenv').config()
const app = express()

app.use(express.json())


mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER}.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "db connection error : "));
db.once('open', function () {
    console.log("db connection success");
});


app.use(Router)

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})