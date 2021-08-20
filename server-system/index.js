const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');


//imported modules
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


//connection with database
mongoose.connect('mongodb://localhost:27017/myMernDB', { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("DB connected") });



//user schema
 const userSchema =new mongoose.Schema({
     name:String,
     email:String,
     password:String,
 })    

 //user model
 const user = new mongoose.model('user', userSchema)



//Routes
app.post('/mylogin', (req, res) => { res.send('my login API') })

app.post('/register', (req, res) => { res.send('my register API') })



app.listen(5000, () => { console.log("DB start at port 5000") })

