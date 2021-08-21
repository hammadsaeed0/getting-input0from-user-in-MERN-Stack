const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/recieve-input" , { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex: true}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
        console.log(`Some Error Found ${e}`);
});