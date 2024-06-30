
const express=require('express');
const postsController = require('../controllers/posts.controller');
const router= express.Router();

router.get('/',postsController.getPost); //cu query id
router.post('/',postsController.createPost);
router.delete('/:id',postsController.deletePost);

module.exports =router;
