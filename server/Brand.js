var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Brands = new Schema{
          Key:   String,
          Id:    String,
          Title :  String,
          Image: String,
        }



module.exports = mongoose.model("Brands",Brands)
