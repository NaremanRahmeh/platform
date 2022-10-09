var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  let dataArray = [

    {name :'johan' , age : 12},
    {name :'lana' , age : 15},
    {name :'lisa' , age : 18},
  ];

  res.json({
    data :dataArray
  });

});

module.exports = router;
