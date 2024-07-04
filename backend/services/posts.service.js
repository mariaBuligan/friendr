const PostModel = require("../data/posts.model");

const postsService={
    getPost: async(postID) => {
        console.log("Reached post GET service");
        const foundPost =  await PostModel.find({id:postID});
        console.log(foundPost)
         return foundPost;

    },
    getAllPosts: async() => {
      const response = await PostModel.find({});
      return response;
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
    },
    updatePost: async(postID,newTitle,newDescrption) => {
        const ObjToBeModified = await PostModel.updateOne({ id:postID  },
            {
              $set: {
                title: newTitle,
                description: newDescrption
              }
            })
    },

    removePostLike: async(postId,username) => {
        await PostModel.updateOne({id:postId},{$pull:{likes:username}});
    },

    addPostLike: async(postId,username) => {
        await PostModel.updateOne({id:postId},{$push:{likes:username}})
    }
}

module.exports = postsService;