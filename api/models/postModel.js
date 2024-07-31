const mongoose = require('mongoose');


const postSchema = new mongoose.Schema(
    {
        titile:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)

const postModel = mongoose.model('post',postSchema)

module.exports = postModel;