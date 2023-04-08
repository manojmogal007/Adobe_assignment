const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:{type:String,required:true,maxlength:50},
    email:{type:String,required:true},
    bio:{type:String,maxlength:200},
    created_at:{type:Date,required:true},
    updated_at:{type:Date,required:true},
})

const Usermodel=mongoose.model('/user',userSchema)

module.exports=Usermodel