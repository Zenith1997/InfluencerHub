const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAccountSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:false
    },
    district: {
        type:String,
        required:false
    },
    city: {
        type:String,
        required:false
    },
    streetNo: {
        type:String,
        required:false
    },
    phoneNo: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    type:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    date: {
        type:String,
        default:Date.now
    }

});

module.exports = UserAccount = mongoose.model('UserAccounts',UserAccountSchema)