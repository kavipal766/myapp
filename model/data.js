const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let user = new Schema({
firstName:{type:String,default:''},
lastName:{type:String,default:'',} ,
age:{type:String,default:'',} ,
dob:{type:Date,default:'',},
class:{type:String,default:'',},
school:{type:String,default:'',},
rollNo:{type:String,default:'',unique:true}
})

var User = mongoose.model('User',user);
module.exports = User;
