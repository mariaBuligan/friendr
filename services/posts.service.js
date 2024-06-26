
const { createPost, deletePost } = require("../controllers/posts.controller");

const postsService={
    createPost:(userObj) => {
        console.log("Reached post controller");
        console.log(userObj)
    },
    deletePost:(userID) => {
         console.log(`Deleted post from user with the Id: ${userID}`);
    }
}

module.exports = postsService