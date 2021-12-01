const mongoose = require('mongoose');


const dbConnect= async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("DB connected successfully");
        
    } catch (error) {
        console.log(`error ${error.message}`);
    }
};

module.exports = dbConnect;



