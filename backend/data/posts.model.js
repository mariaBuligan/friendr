const mongoose =require('mongoose')
const PostModel = mongoose.model('Post',
    {
        id:String,
        user_id:String,
        date:String,
        title:String,
        description:String,
        
    } 
);

module.exports = PostModel;