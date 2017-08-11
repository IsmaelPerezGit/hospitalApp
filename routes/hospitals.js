var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    database : 'hospital_app'
  }
});

/* GET hospitals page. */
router.get('/', function(req, res, next) {
  knex.raw(`select * from hospitals`)
    .then(function(data) {
      res.render('list', {
        title: 'Hospitals',
        list: data.rows
      });
      console.log(data.rows);
    })
});

module.exports = router;
