const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');


//imported modules
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


//connection with database
mongoose.connect('mongodb://localhost:27017/myMernDB', {useNewUrlParser: true, useUnifiedTopology: true},()=> {console.log("DB connected")});

//Routes
app.get('/' , (req, res)=>{

   res.send('hello from simple server :)')

})

app.listen(5000,() =>{
    console.log("DB start at port 5000")
})

