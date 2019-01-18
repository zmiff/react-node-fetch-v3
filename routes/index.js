const path = require('path');
var express = require('express');
const app = express();
var router = express.Router();
const publicPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(publicPath));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(publicPath, 'index.html'));
});

module.exports = router;
