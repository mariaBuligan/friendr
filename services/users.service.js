const { deleteUser } = require("../controllers/users.controller");

const usersService={
    createUser:(userObj) => {
        console.log("Reached user controller");
        console.log(userObj)
    },
    deleteUser:(userID) => {
         console.log(`Deleted user ${userID}`);
    }
}

module.exports = usersService