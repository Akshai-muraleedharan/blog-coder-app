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


const postDelete = async ( req,res)=> {
  
    try {
        const deletePost =await postModel.findByIdAndDelete(req.params.id)

        if(!deletePost){
         res.json("could not delete")
        }
     
        res.status(200).json('delete sucessfully')
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const singlePost =async (req,res) => {

    try {
        const postSingle =await postModel.findById(req.params.id)
        if(!postSingle){
            res.json("data not found")
        }
        res.status(200).json(postSingle)
    } catch (error) {
       res.status(400).json(error.message)
    }
}


const addPost =async (req,res) => {
    const {title,content,coder} = req.body
    const post =new postModel( {title, content,coder})

    try {
        if(!title || !content || !coder){
            res.json("title or message is required")
        }
        await post.save()
        res.status(200).json(post)
    } catch (error) { 
        res.json(error.message)
    }
}  


module.exports = {addPost,getALLPost,postUpdate,postDelete,singlePost}