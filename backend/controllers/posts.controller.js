
const postsService = require("../services/posts.service");
const PostModel = require ("../data/posts.model");

const postsController={
    getPost: async(req,res) => {
         const postID = req.query.id;
         console.log(`Id luat:${postID}.`)
         const postObj = await postsService.getPost(postID);
         res.status(200).json(postObj);
         
    },

    createPost: async(req,res) => {
        console.log("Reached post POST controller");
        const postToBeCreated = req.body;
        console.log(postToBeCreated);
        
        if(postToBeCreated === undefined || JSON.stringify(postToBeCreated) ==='{}' ||
            !postToBeCreated.title ||  !postToBeCreated.id || !postToBeCreated.user_id || !postToBeCreated.date ){
                   res.status(401).send("Post introduced is NOT valid");
            }else{
                postsService.createPost(postToBeCreated);
                  res.status(201).send("Created New Post")
            }
      
    },

    deletePost: async(req,res) => {
       const postID = req.params.id;
       console.log(`Delete post with the ID: ${postID}`);

       const result =  postsService.deletePost(postID);

      if ((await result).deletedCount == 0) {
        console.log(`The user with the ID=${postID} doesn't exist`);
        res.status(400).send("Invalid User");
      } else 
            res.status(200).send(`The user with the ID:${postID} was deleted`);
    }
}

module.exports = postsController;