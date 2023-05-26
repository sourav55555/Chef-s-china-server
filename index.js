const express = require('express');
const app = express();
const chefs = require("./chefs.json");
const cors = require('cors')
const recipes = require('./recipes.json');

const port = 5000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Vercel Chef Server")
})

app.get("/chefs", (req,res)=>{
    res.send(chefs);
})

app.get("/chefs/:id", (req,res)=>{
    const chefDetails = chefs.chefs.find(data => data.id == req.params.id);
    res.send(chefDetails);
})

app.get("/recipes", (req,res)=>{
    res.send(recipes);
})

app.listen(port, ()=>{
    console.log("Vercel server online")
})