const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// those two dots are 
const {JWT_SECRET} = require('../keys')

//call middleware
const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res)=>{
    res.send("hello user")
})

/*router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello user")
})*/ /*commented this coz it was only for testing purpose */
// creating signup route 
// when user user signup this callback requests will fire
router.post('/signup',(req,res)=>{

    const {name,email,password} = req.body
    if(!email || !password || !name){
//when i counter this error i wanna stop it there, so using return
        return res.status(422).json({error:"please add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with that mail"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
    // to save the given data to database
            const user = new User({
                email,
                password:hashedpassword,
                name
            })

            user.save()
            .then(user=>{
                res.json({message:"saved successfully"})
            })
    // if any error is seen catch log
            .catch(err=>{
                console.log(err)
            })
        })
    })

    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
// return is used as it should not further continue 
            return res.status(422).json({error:"Invalid Email or password"})
        }
//to compare password received from client 
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({messafe:"successfully signed in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
// sending token as response 
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
// this is an error from developer side, so console.log which can 
// be seen in server 
        .catch(err=>{
            console.log(err)
        })      
    })
})

module.exports = router

