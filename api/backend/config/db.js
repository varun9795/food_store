require('dotenv').config();
const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MOngo db csucess");
    }
    catch (error) {
        console.error("MOngoDb fail...");
        process.exit(1);
    }
}

module.exports=connectDb