const usersModel = require("../data/users.model");
const usersService = require("../services/users.service");

const usersController={
    getUser: async(req,res) => {
        const UserID =req.params.id
        console.log("Reached Get user controller");
        console.log(UserID);
        const userObj = await usersService.getUser(UserID);
        res.status(200).json(userObj);
    },

    createUser:async(req,res) => {
        console.log("Reached user controller");
        const usertoBeCreated = req.body;
        if(usertoBeCreated === undefined || JSON.stringify(usertoBeCreated) === '{}' ||
         !usertoBeCreated.firstName || !usertoBeCreated.lastName || !usertoBeCreated.userName || !usertoBeCreated.id ){
             res.status(400).send("Invalid user Object");
             return;
        }
        usersService.createUser(usertoBeCreated);
        res.status(201).send("User Created Succesfully");
       
    },

    deleteUser:async(req,res) => {
        const UserID =req.params.id
        console.log(`Delete user with id: ${UserID}`);

        if( usersModel.find({"id": UserID}) != null){
            usersService.deleteUser(UserID);
            res.status(200);
        }else {
           console.log(`The user with the ID=${UserID} doesn't exist`);
           res.status(400);
        }
    }
}

module.exports = usersController;