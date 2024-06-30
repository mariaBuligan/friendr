const PostModel = require("../data/posts.model");


const postsService={
    getPost: async(postID) => {
        console.log("Reached post GET service");
        const foundPost =  await PostModel.find({id:postID});
        console.log(foundPost)
         return foundPost;

    },
    createPost: async(post_body) => {
        console.log("Reached post POST service");

        const NewPost = new PostModel(post_body);
        NewPost.save().then(() => console.log("Post Created Succesfuly!"));
        
    },
    deletePost: async(postID) => {
         console.log(`Deleted post with the Id: ${postID}`);
        const response = await PostModel.collection.deleteOne({ id: postID });
        return response;
    }
}

module.exports = postsService;