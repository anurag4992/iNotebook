const mongoose=require("mongoose");

const uri="mongodb://localhost:27017/blogDB";

const connectToMongo= () => {
    mongoose.connect(uri, () => {
        console.log("Connected to mongo");
    });
}

module.exports=connectToMongo;