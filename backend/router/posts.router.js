
const express=require('express');
const postsController = require('../controllers/posts.controller');
const router= express.Router();

router.get('/',postsController.getPost); //cu query id
router.post('/',postsController.createPost);
router.delete('/:id',postsController.deletePost);
router.patch('/:id/:title/:description',postsController.updatePost);

module.exports =router;
