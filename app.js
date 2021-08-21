const express = require('express');
require("./database/conn");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const static_path = path.join(__dirname ,"./src");
const ModelShema = require('./modell/mode');


app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/", (req , res)=>{
    res.render("index")
})

app.post("/rejister", async(req , res)=>{
    try {
        const givendata = new ModelShema({
            firtname: req.body.firtname,
            lastname: req.body.lastname,
            email: req.body.email 
        });
        const saveData = await givendata.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(404).send(error)
    }
})



app.listen(port, ()=>{
    console.log("Server Working Perfect");
})