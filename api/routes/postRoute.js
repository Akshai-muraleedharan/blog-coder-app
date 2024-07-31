const { addPost, getPost } = require('../controller/postController')

const router =require('express').Router()


router.get('/post-all',getPost)
        .post('/post',addPost)


module.exports =router