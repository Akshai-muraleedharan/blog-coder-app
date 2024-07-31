const { addPost, getALLPost } = require('../controller/postController')

const router =require('express').Router()


router.get('/post-all',getALLPost)
        .post('/post',addPost)


module.exports =router