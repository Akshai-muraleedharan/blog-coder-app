const postModel = require('../models/postModel')




const addPost =async (req,res) => {
    const {title,content} = req.body
    const post =new postModel( {title, content})

    try {
        if(!title || !content){
            res.json("title or message is required")
        }
        await post.save()
        res.status(200).json(post)
    } catch (error) { 
        res.json(error.message)
    }
}


module.exports = {addPost}