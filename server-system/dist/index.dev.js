"use strict";

var express = require("express");

var cors = require("cors");

var mongoose = require('mongoose'); //imported modules


var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); //connection with database

mongoose.connect('mongodb://localhost:27017/myMernDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  console.log("DB connected");
}); //user schema

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}); //user model

var User = new mongoose.model('User', userSchema); //route
// app.get('/',(req,res)=>{
//     res.send('Root path api running..')
// })

app.post('/login', function (req, res) {
  //  res.send('my login API') 
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password; //here we can use the mongo findOne() function for user login with email and password 

  User.findOne({
    email: email
  }, function (err, user) {
    if (user) {
      if (password === user.password) {
        res.send({
          message: "Login Successfull",
          user: user
        });
      } else {
        res.send({
          message: "Password didn't match"
        });
      }
    } else {
      res.send({
        message: "User not registered"
      });
    }
  });
});
app.post('/register', function (req, res) {
  // console.log('my register api')
  var _req$body2 = req.body,
      name = _req$body2.name,
      email = _req$body2.email,
      password = _req$body2.password; //here we can use the mongo findOne() function for user already exist email datas 

  User.findOne({
    email: email
  }, function (err, user) {
    if (user) {
      res.send({
        message: "User Already Register"
      });
    } else {
      var _user = new User({
        name: name,
        email: email,
        password: password
      }); //here we can use save() function for save the user schemas in mongodb


      _user.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            message: 'Successfully Registered, Please login now.'
          });
        }
      });
    }
  });
});
app.listen(5000, function () {
  console.log("DB start at port 5000");
});