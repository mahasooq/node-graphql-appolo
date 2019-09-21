const mongoose = require("mongoose");

const User = new mongoose.Schema({  
  name: {
    type: String,
    unique:true
  },
  age : Number
})

module.exports = mongoose.model("User", User);
