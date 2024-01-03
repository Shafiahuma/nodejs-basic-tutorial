var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const budget = 500;
  // res.setHeader('Content-Type', 'application/json');
  res.send('Hello World!' + budget);
});

module.exports = router;
