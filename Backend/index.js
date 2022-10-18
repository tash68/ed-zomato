require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://tashogeti:Mongodb68@cluster68.dsbcxbp.mongodb.net/?retryWrites=true&w=majority");

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(cors())
app.use(express.json())
 
// app.get('/hello', (req,res)=>{
//     res.json({"wf":"ghh"});
// })

const routes = require('./routes/routes')
app.use('/api', routes)

let port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Server Started at ${3000}')
})