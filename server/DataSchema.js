var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DataSchema = new Schema (
  {
    Key: String,
    Name: String,
    Image: String,
    Price : String,
    Discount: String,
    
  }
);
module.exports = mongoose.model("DataSchema",DataSchema)
