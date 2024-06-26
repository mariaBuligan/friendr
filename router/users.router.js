const express=require('express');
const usersController = require('../controllers/users.controller');
const router= express.Router();

router.post('/', (req, res) => {
    usersController.createUser(req.body);
    res.status(201);  //codul de eroare , custom error code
    res.send("Succesfuly Created");
  })

router.get('/',(req,res) => {
    const userID=req.query.id; //daca e query param
    console.log(userID);
    res.status(404).send();
  
})

router.delete('/:id',(req,res)=> {
    const userID=req.params.id;
    console.log(userID);
    usersController.deleteUser(userID);
    res.status(100).send();

})
module.exports =router;