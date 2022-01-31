const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    commenterID:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports = Comments = mongoose.model('Comments',CommentsSchema)