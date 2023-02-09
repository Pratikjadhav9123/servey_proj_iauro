const express=require("express")

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
    console.log(req.query)
    console.log(typeof(req.query.rad))
    console.log(typeof(req.query.chk))

    for(i of req.query.chk){
        console.log(i)
    }
})
app.listen(9000);
