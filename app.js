const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
let items = ["buy food","cook food","eat food"]
let workItems=["Write Template","Stack Ex"]

app.get("/",function(req,res){
// putting the Logic  and Calculating Part inside the GET part i.e.When the user comes to the homepage.
    let curDay1 = new Date()
    let options = {
    weekday:"long",
    // year:"numeric",
    month:"long",
    day:"numeric"
}
curDay1 = curDay1.toLocaleDateString("en-US",options)

    res.render("list",{pageType:curDay1,ITEMS:items})
})

app.post("/",function(req,res){
    let item = req.body.newToDo
    
    if(req.body.btnValue==="Work To Do List"){
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }

     
     
    // res.render("list",{ITEM:item})
    // console.log(item);
})

app.get("/work",function(req,res){

    res.render("list",{pageType:"Work To Do List",ITEMS:workItems})

})

app.listen(3000,function(){
    console.log("Server at 3000");
})