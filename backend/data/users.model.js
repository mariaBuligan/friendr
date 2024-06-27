
const mongoose =require('mongoose')
const usersModel = mongoose.model('User',
    {
        id:String,
        firstName:String,
        lastName:String,
        userName:String,
        birthYear:Number
    } 
);

module.exports = usersModel;