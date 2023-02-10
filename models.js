const mongoose = require("mongoose");
  
  

  
  
    // var thingSchema = new mongoose.Schema({}, { strict: false });
    // // var thing = new Thing({ iAmNotInTheSchema: true });
    // // thing.save() 
    
    
    // function create_collection (form_name){
      
      
    //  module.exports =  mongoose.model(form_name, thingSchema);
      
    // }

    
    // var collections = mongoose.connections[0].collections;
    // var names = [];
    
    // Object.keys(collections).forEach(function(k) {
    //     names.push(k);
    // });
    
    // console.log(names);


    
  

    var establishedModels = {};
function createModelForName(name) {
    if (!(name in establishedModels)) {
        var Any = new mongoose.Schema({}, { strict: false });
        establishedModels[name] = mongoose.model(name, Any);
    }

    // console.log(establishedModels);
    return establishedModels[name];
    // return establishedModels;
}





module.exports = createModelForName;












