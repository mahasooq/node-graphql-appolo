const mongoose = require("mongoose");

const VehicleType = new mongoose.Schema({  
  name: {
    type: String,
    unique:true
  }
})

module.exports = mongoose.model("VehicleType", VehicleType);
