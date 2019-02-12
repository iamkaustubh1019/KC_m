var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
var mongojs = require('mongojs');
var db = mongojs("mongodb://[User_ID]:[Password]@ds243084.mlab.com:43084/kiraana");

var Data = require('./DataSchema');

// this will convert the data from mongodb int json format for us to read it using axios
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routing will post the json format on web page
router.get("/products", (req, res) => {
  db.products.find(( err, data) => {
    if(err) return res.json({error:err });
    return res.json(data);
  });
});

router.post("/products", function(req, res) {
  var data = new Data();
  data.Key = req.body.Key;
  data.Name = req.body.Name;
  data.Image = req.body.Image;
  data.Price = req.body.Price;
  data.Discount = req.body.Discount;

  db.products.save(data,function (err) {
    if(err) {
      res.send(err);
    }
    else {
      res.json(data);
    }

  });

});

app.use('/api',router);
app.listen(port);
console.log('Listening on port ' + port );
