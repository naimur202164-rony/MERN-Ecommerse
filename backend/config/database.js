const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/Ecommerse', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;