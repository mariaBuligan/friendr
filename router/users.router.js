const express=require('express');
const router= express.Router();

//TO DO REMOVE

const users=[{id:1,firstName:"Forrest",lastname:"Gump"},
             {id:2,firstName:"HArry",lastname:"Sedon"},
             {id:3,firstName:"Mircet",lastname:"Magnum"}];

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201);  //codul de eroare , custom error code
    res.send("Succesfuly Created");
  })

router.get('/',(req,res) => {
    console.log(req.query.id);
    const userID=req.query.id;
    let found=false

    for(let i=0;i< users.length;i++){
        if(users[i].id == userID){
            res.send(users[i]);
            found=true;
            //return;
        }
    }
    if(!found)
    res.status(404).send;
  
})
module.exports =router;