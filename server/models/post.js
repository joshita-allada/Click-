const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// we can destructure mongoDB, with Schema.types
const {ObjectId} = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title:{
    type:String,
    required:true
    },
    body:{
        type:String,
        required:true
    },
// photo is given as url of a string. so string type
    photo:{
        type:String,
        required:true
    },

    likes:[{
        type:ObjectId,
        ref:"User"}],

    
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
// posted by has to link with user.js
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})
mongoose.model("Post",postSchema)
