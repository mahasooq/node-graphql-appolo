const mongoose = require("mongoose");

const Vehicle = new mongoose.Schema({  
  name: String,
  color: String,    
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"VehicleType"
  },
  owner:  {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
})

module.exports = mongoose.model("Vehicle", Vehicle);
