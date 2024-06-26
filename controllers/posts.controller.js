
const postsService = require("../services/posts.service");

const postsController={
    createPost:(userObj) => {
        console.log("Reached post controller");
        console.log(userObj)
        postsService.createPost(userObj);
    },

    deletePost:(userID) => {
        console.log(`Delete post of the user with the ID: ${userObj}`);
        postsService.deletePost(userID);
    }
}

module.exports = postsController;