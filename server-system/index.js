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
 const User = new mongoose.model('User', userSchema)


//route

// app.get('/',(req,res)=>{
//     res.send('Root path api running..')
// })
 
app.post('/login', (req, res) => {
    //  res.send('my login API') 
    const{email,password} = req.body
    //here we can use the mongo findOne() function for user login with email and password 
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            }else{
                res.send({message: "Password didn't match"})
            }
        }else{
            res.send({message: "User not registered"})
        }
    })
    })



app.post('/register', (req, res) => {
    // console.log('my register api')
      const {name,email,password} = req.body

//here we can use the mongo findOne() function for user already exist email datas 
      User.findOne({email:email},(err,user)=>{
          if(user){
              res.send({message:"User Already Register"})
          }else{
            const user = new User({ 
                name,
                email,
                password,
            })
            //here we can use save() function for save the user schemas in mongodb
             
            user.save( err => {
                if(err){
                      res.send(err)
                }else{
                    res.send({message:'Successfully Registered, Please login now.'})
                }
            })
          }
      })      

      
    })



app.listen(5000, () => { console.log("DB start at port 5000") })

