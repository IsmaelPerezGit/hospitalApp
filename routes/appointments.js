var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    database : 'hospital_app'
  }
});

/* GET doctors page. */
router.get('/', function(req, res, next) {
  res.render('appointments', { title: 'Appointments' });
});

module.exports = router;
