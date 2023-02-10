const Thing = require("../models");

async function find(user_name){

    res= await Thing.findOne({your_name:user_name});

     console.log(res);

}

async function update(user_name){

    res = await Thing.findOneAndUpdate({your_name:user_name},{


        chk :["marathi"]


    })
}


async function remove_field (){



    Thing.find({your_name:user_name}).select("-chk").then((res)=>{

        console.log(res);
    })
}

remove_field("pratik");