require("dotenv").config();
const mongoose = require("mongoose");
const connect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI, {

    }).then(() => console.log("MongoDB Connected"))
    .catch(error => console.error(error))
}
module.exports = connect;