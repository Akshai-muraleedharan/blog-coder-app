const { addPost } = require('../controller/postController')

const router =require('express').Router()


router.post('/post',addPost)


module.exports =router