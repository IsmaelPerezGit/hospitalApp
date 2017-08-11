var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    database : 'hospital_app'
  }
});

/* GET patients listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
