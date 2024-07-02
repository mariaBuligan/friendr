const express=require('express');
const usersController = require('../controllers/users.controller');
const router= express.Router();

router.get('/:userName',usersController.getUser);
router.post('/',usersController.createUser);
router.delete('/:id',usersController.deleteUser);


module.exports =router;