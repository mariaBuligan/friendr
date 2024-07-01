
const postsService = require("../services/posts.service");
const PostModel = require ("../data/posts.model");

const postsController={
    getPost: async(req,res) => {
         const postID = req.params.id;
         console.log(`Id luat:${postID}.`)
         const postObj = await postsService.getPost(postID);
         res.status(200).json(postObj);
         
    },

    getAllPosts: async(req,res) => {
        const postsObj = await postsService.getAllPosts()
        res.status(200).send(postsObj);
    },

    createPost: async(req,res) => {
        console.log("Reached post POST controller");
        const postToBeCreated = req.body;
        console.log(postToBeCreated);
        
        if(postToBeCreated === undefined || JSON.stringify(postToBeCreated) ==='{}' ||
            !postToBeCreated.title ||  !postToBeCreated.id || !postToBeCreated.user_id ){
                
                   res.status(401).send("Post introduced is NOT valid");

            }else{
                postToBeCreated.date = new Date().toISOString();
                postsService.createPost(postToBeCreated);
                  res.status(201).send("Created New Post")
            }
      
    },

    deletePost: async(req,res) => {
       const postID = req.params.id;

       const result =  postsService.deletePost(postID);

      if ((await result).deletedCount == 0) {
        console.log(`The user with the ID=${postID} doesn't exist`);
        res.status(400).send("Invalid User");
      } else 
            res.status(200).send(`The user with the ID:${postID} was deleted`);
    },

    updatePost: async(req,res) => {
        const postID = req.params.id;
        const newTitle =req.params.title;
        const newDescrption = req.params.description;

        console.log(postID,newTitle,newDescrption);
        
        const response = await postsService.updatePost(postID,newTitle,newDescrption);
        console.log(response);
        res.status(200).send("Title and Description have been modified");
    }
}


module.exports = postsController;