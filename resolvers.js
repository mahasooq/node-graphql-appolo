const User = require('./User.model');
const VehicleType = require('./VehicleType.model');
const Vehicle = require('./Vehicle.model');

module.exports = {
  Query : {
    vehicles: async(_, args)=> {
      try {
        let vehicles = await Vehicle.find(args).populate('type owner');
        return vehicles;
      } catch (error) {
        throw error;
      }
    },
    users: async () => {
      try {
        let users = await User.find();
        return users;
      } catch (error) {
        throw error;
      }
    }
  },
  Mutation: {
    createUser: async(_, args)=> {
      try {        
        let newUser = new User({
          name: args.name,
          age : args.age
        });
        let saved = await newUser.save();
        console.log("saved : ", saved)
        return {
          name : saved.get('name'),
          _id : saved.id,
          age : saved.age
        };
      } catch (error) {
        throw error;
      }
    },

    createVehicleType: async(_, args)=> {
      try {        
        let newVT = new VehicleType({
          name: args.name
        });
        let saved = await newVT.save();
        console.log("saved : ", saved)        
        let vehicleTypes = await VehicleType.find();
        return vehicleTypes;
      } catch (error) {
        throw error;
      }
    },
    createVehicle: async(_, args)=> {
      try {        
        let newVehicle = new Vehicle({
          name: args.vehicleinputtype.name,
          color: args.vehicleinputtype.color,  
          type: args.vehicleinputtype.type,
          owner: args.vehicleinputtype.owner
        });
        let saved = await newVehicle.save();
        saved = await Vehicle.populate(saved, 'type owner');        
        console.log("saved : ", saved)     
        return saved;
      } catch (error) {
        throw error;
      }
    }

  }
};