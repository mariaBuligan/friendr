
const userModel = require ("../data/users.model");

const usersService={
    getUser:async(userID) => {
        const response = await userModel.find({id: userID})
            console.log(response);
            return response;

    },

    createUser:async(userObj) => {
        console.log("Reached user Create service");
        console.log(userObj);

        const userToBeCreated = new userModel(userObj);
        userToBeCreated.save().then( () => console.log("User Created"));
    },

    deleteUser: async(userID) => {
         console.log(`Reached user delete service`);
         await userModel.destroy({
            where: {
              id: userID,
            },
          }).then( () => console.log("User was Deleted"));
    }
}

module.exports = usersService;

//update, delete pt users;