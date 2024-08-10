const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },

    fullName: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required:true
    },
   
    age: {
        type: Number, 
        required: true,
    },

    phone: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    
    // createdBy:{
    //     type: "String",
    //     default: "default"
    // }
}, { timestamps: true });

module.exports = mongoose.model('user',UserSchema);