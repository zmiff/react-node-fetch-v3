var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/respond', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/data', function(req, res, next) {
    res.json([{
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
      }, {
        id: 2,
        name: "King Arthur",
        password: 'king-arthur'
      }]);
});

module.exports = router;
