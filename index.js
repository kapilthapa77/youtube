const express = require("express");
const videoRouter= require("./routes/videoroutes")
const mongoose=require("mongoose");

mongoose.connect('mogodb://localhost:270777/youtube').then(()=>{
    console.log("DB connected");
});
const app = express();
app.use(express.json());
app.get("/vid", (req,res)=>{
    res.send("hello");
})
app.use(videoRouter);
app.listen(7000, onServerStart);
function onServerStart(){
    console.log("server started");
}