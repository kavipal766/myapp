var Data = require('../model/data.js')
module.exports={
  insertUserDetails:(req,res)=>{
      console.log("hitting");
      var obj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob: req.body.dob,
        class: req.body.class,
        school: req.body.school,
        rollNo: req.body.rollNo
      }
      Data.create(obj,(err,data)=>{
      if(err){
          return res.json({
              statusCode:400,data:err
            })
          }
          else
          {
            return res.json({
              statusCode:200,data:data
            })
          }
        })
  },

findUserDetail:(req,res)=>{
  var rollNo = req.body.rollNo;
  Data.find({rollNo:rollNo},(err,data)=>{
  if(err){
      return res.json({
          statusCode:400,data:err
        })
      }
      else
      {
        return res.json({
          statusCode:200,data:data
        })
      }
    })
  },
findUserOneDetail:(req,res)=>{
  var rollNo = req.body.rollNo;
  Data.findOne({rollNo:rollNo},(err,data)=>{
  if(err){
      return res.json({
          statusCode:400,data:err
        })
      }
      else
      {
        return res.json({
          statusCode:200,data:data
        })
      }
    })
  },

  count:(req,res)=>{
    Data.count({rollNo:25},(err,data)=>{
      if(err){
        return res.json({
          statusCode:400,
          data:err
        })
      }
        else{
          return res.json({
            statusCode:200,
            data:data
          })
        }
      })
    },

    deleteOne:(req,res)=>{
      Data.deleteMany({rollNo:[27,28]},(err,data)=>{
        if(err){
          return res.json({
            statusCode:400,
            data:err
          })
        }
          else{
            return res.json({
              statusCode:200,
              data:data
            })
          }
        })
    },
    distinct:(req,res)=>{
      Data.distinct("age",(err,data)=>{
        if(err){
          return res.json({
            statusCode:400,
            data:err
          })
        }
          else{
            return res.json({
              statusCode:200,
              data:data
            })
          }
        })
    },
    update:(req,res)=>{
      var age = req.body.age;
      var obj = {
        age:age
      }
      Data.update(obj,{$set:{firstName:req.body.name}},(err,data)=>{
        if(err){
          return res.json({
            statusCode:400,
            data:err
          })
        }
          else{
            return res.json({
              statusCode:200,
              data:data
            })
          }
        })
    },
  }
