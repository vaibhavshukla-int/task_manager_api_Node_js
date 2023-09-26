const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;

// Here TASK-MANAGER this is we provide the database name otherwise it will create the default test name

// this is module that have excute the function we we can import it without store any variable

// to make the mongodb run first then  server , we store it in the function

// this function will return the promise ..
