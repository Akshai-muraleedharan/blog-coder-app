const { addPost, getALLPost, postUpdate } = require('../controller/postController')

const router =require('express').Router()


router.get('/post-all',getALLPost)
        .post('/post',addPost)
        .put('/edit/:id',postUpdate)


module.exports =router