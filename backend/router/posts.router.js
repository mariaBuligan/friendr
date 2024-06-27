
const express=require('express');
const postsController = require('../controllers/posts.controller');
const router= express.Router();

router.post('/', (req, res) => {
    postsController.createPost(req.body);
    res.status(201);  //codul de eroare , custom error code
    res.send("Succesfuly Created Post");
  })

router.get('/',(req,res) => {
    const userID=req.query.id; //daca e query param
    console.log(userID);
    res.status(404).send();
  
})

router.delete('/:user',(req,res)=> { //e
    const userID=req.params.id;
    console.log(userID);
    postsController.deletePost(userID);
    res.status(100).send();

})
module.exports =router;
