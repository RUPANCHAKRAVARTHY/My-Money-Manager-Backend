
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
//schema 
const userSchema = mongoose.Schema({
firstname: {
    required: [true, "firstname is required"],
    type: String,
},
lastname: {
    required: [true, "lastname is required"],
    type: String,
},
email: {
    required: [true, "email is required"],
    type: String,
},
password: {
    required: [true, "password is required"],
    type: String,
},
isAdmin: {
    type: Boolean,
    default: false,
},
},{
    timestamp: true,
});

//Hash password

userSchema.pre('save',async function(next) {
//console.log(this);
if(!this.isModified("password")){
    next();
}
const salt =await bcrypt.genSalt(10);
this.password =await bcrypt.hash(this.password, salt);
next();
});

//compile schema into model
const User = mongoose.model("User",userSchema);
module.exports = User;