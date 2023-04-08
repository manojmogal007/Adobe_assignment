const express=require('express')
require('dotenv').config()
const mongoose=require('mongoose')
const cors=require('cors')



const app=express()
app.use(express.json())
app.use(cors())






app.listen(process.env.port,()=>{
    mongoose.connect(process.env.dburl)
    .then(()=>{
        console.log('Server connected to database')
    })
    .catch((err)=>{
        console.log(err)
        console.log('Database connection error')
    })
    .finally(()=>{
        console.log(`Server running on port ${process.env.port}`)
    })
})