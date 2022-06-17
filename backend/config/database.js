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
//  {013fbdf4-c7bb-11ec-adde-806e6f6e6963}