const express = require('express')
const app = express()
//const{} = require('./keys')
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')
//Joshita2108#mongodb
require('./models/user')
require('./models/post')

//mentioning auth.js in app.js
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
// mongoose.model("User")
mongoose.connect(MONGOURI)
mongoose.connection.on('connected', ()=>{ 
    console.log("connected to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})
require('./models/user')
// registering post model in app.js 
require('./models/post')

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
