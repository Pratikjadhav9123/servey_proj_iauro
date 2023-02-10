var mongoose = require('mongoose');


var connections = {};

 function getDatabaseConnection (dbName) {

    console.log("in get db collec");

    
  
        connections[dbName] = mongoose.connect('mongodb://localhost:27017/' + dbName).then((e) => {
                console.log(` created and connected to ${dbName}`);
                // console.log(e);
            });
       
        // return connections[dbName];
        
    }      






module.exports = getDatabaseConnection;