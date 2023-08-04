const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.mongo_url)

const connection = mongoose.connection;

//verify connection
connection.on('connected',()=>{
    console.log('MongoDB Connection Successful')
})

//verify error

connection.on('error',()=>{
    console.log('Mongo DB Connection Error')
})