const mongoose = require("mongoose");
// || set mongoose up to use promises
mongoose.Promise = global.Promise;
// || set up the connection with our database
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
