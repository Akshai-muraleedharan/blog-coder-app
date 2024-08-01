const { addPost, getALLPost, postUpdate, postDelete, singlePost } = require('../controller/postController')

const router =require('express').Router()


router.get('/post-all',getALLPost)
        .post('/post',addPost)
        .put('/edit/:id',postUpdate)
        .delete('/:id',postDelete)
        .get('/post/:id',singlePost)

module.exports =router;