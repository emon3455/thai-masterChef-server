const express = require("express");
const app = express();
const cors = require('cors');
const port  =  process.env.PORT || 5000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("thai master chefs api is running");
});

const chefs = require("./data/shefs.json");
app.get("/chefs" , (req, res)=>{
    res.send(chefs);
})

app.get("/chefs/:id" , (req,res)=>{
    const id = req.params.id;
    const selectedChef =  chefs.find(cf => cf.id == id);
    res.send(selectedChef);
})

app.listen(port , ()=>{
    console.log(`thai master api is running on ${port}`);
})