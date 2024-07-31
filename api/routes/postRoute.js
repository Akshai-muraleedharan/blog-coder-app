const router =require('express').Router()
const postController = require('../controller/postController')

router.get('/post',postController)


module.exports =router