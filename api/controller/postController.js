const postModel = require('../models/postModel')


const getALLPost =async (req,res) => {

    try {
      const  getAllPost = await postModel.find()

        if(!getAllPost){
            res.status(400).json("no data found")
        }

        res.json(getAllPost)
    } catch (error) {
        res.status(400).json(error.message)
    }
}


const postUpdate = async (req,res) => {
   
    try {
        const singlePost = await postModel.findByIdAndUpdate(req.params.id ,req.body)

        if(!singlePost){
            res.json("could not update")
        }
        res.status(200).json(singlePost)
    } catch (error) {
        res.status(400).json(error.message)
    }
} 


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


module.exports = {addPost,getALLPost,postUpdate}