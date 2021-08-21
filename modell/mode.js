const mongoose = require('mongoose');

const shema = new mongoose.Schema({
    firtname : {
        type : String, 
        require : true
    }, 
    lastname : {
        type : String, 
        require : true
    }, 
    email : {
        type : String, 
        require : true
    }
    
});

const ModelShema = new mongoose.model("ModelShema", shema);
module.exports = ModelShema;