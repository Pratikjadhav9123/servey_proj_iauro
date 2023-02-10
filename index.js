const express=require("express");
const mongoose = require("mongoose");

const create_schema = require("./models");

const create_db = require("./create_database");










// var url = "mongodb://localhost:27017/hello";

// mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then((e) => {
//     console.log("connected to dbbbbbbbbb");
//     // console.log(e);
// })


const bodyparser=require("body-parser")    

const app =express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",(req,resp)=>{
    resp.sendFile(__dirname+"/form.html")
})

app.get("/submit-details",(req,resp)=>{
    // resp.send("<p>req.params.usr<p>")
    //resp.send("hello")
    console.log(req.query.usr);
})

app.post("/submit-details",(req,resp)=>{
    // resp.send("<p>req.params.usr<p>")
    //resp.send("hello")

    console.log(req.body.usr)
})
app.get("/create-form",(req,resp)=>{
    // console.log(req.query)
    // console.log(typeof(req.query.rad))
    // console.log(typeof(req.query.chk))

    console.log("hello")


 
    var db = create_db("admin_1");
   
 
    mongoose.connection.on('open', function (ref) {
        console.log('Connected to mongo server.');
    });
        
    
   


       
    data=req.query;
    // thing = new Thing(data);

   var  Model = create_schema("collec_4")
    var model = new Model(data);

    model.save().then((res)=>{
        console.log(res);
    }).catch((e)=>{

        console.log(e);
    })

    // thing.save().then((res)=>{

    //     // console.log(res);
    //     // console.log(res.chk[1]);
    // });
    
async function find(user_name){

    res= await Thing.findOne({your_name:user_name});

    //  console.log(res);

}



async function update(user_name){

    res = await Thing.findOneAndUpdate({your_name:user_name},{


        chk :["marathi"]


    })
}


async function remove_field (admin , ){



    Thing.find().select("-chk").then((res)=>{

        console.log(res);
    })
}

// remove_field("pratik");


// async function delete()


// find("pratik");


// update("pratik");


    
        
    




    
})



app.listen(3000);
