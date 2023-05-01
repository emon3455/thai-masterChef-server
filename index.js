const express = require("express");
const app = express();
const cors = require('cors');
const port  =  process.env.PORT || 5000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("thai master chefs api is running");
});

const shefs = require("./data/shefs.json");
app.get("/shefs" , (req, res)=>{
    res.send(shefs);
})

app.listen(port , ()=>{
    console.log(`thai master api is running on ${port}`);
})