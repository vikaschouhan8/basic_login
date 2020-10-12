var express = require('express');
var router = express.Router();

/* GET home page. */
let users = [
  {
    email:"abcd@gmail.com", password:1234
  }
]
router.get('/', function(req, res, next) {
  res.send("welcome to backend server");
});

router.post('/login', function(req, res){
  let result = users.find(user => user.email == req.body.email)
  if(result){
    if(req.body.password == result.password){
      res.status(200).send({
        message:'login succesfully'
      })
    }else res.status(200).send({
      message: "incorrect password"
    })
  }else {
    res.status(200).send({
      message:"user not found"
    })
  }
});

module.exports = router;
