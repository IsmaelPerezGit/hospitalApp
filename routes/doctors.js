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
  knex.raw(`select * from doctors`)
    .then(function(data) {
      res.render('list', {
        title: 'Doctors',
        list: data.rows
      });
      console.log(data.rows);
    })
});

module.exports = router;
