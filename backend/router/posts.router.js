
const express=require('express');
const postsController = require('../controllers/posts.controller');
const router= express.Router();

router.get('/:id',postsController.getPost); //cu query id
router.get('/',postsController.getAllPosts);
router.post('/',postsController.createPost);
router.delete('/:id',postsController.deletePost);
router.patch('/:id/:title/:description',postsController.updatePost);
router.patch('/:id/likes',postsController.updatePostLikes);

module.exports =router;
