const mongoose =require("mongoose")
const postSchema=new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    location:{
        type:String,
       
    },
    description:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

})
const postsModal=mongoose.model("posts",postSchema)
module.exports=postsModal
// module.exports=mongoose.model("data",schemaModal)