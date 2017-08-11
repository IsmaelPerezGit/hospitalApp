var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'hospital_app'
  }
});

//GET ALL PLAYERS
router.get('/', function(req, res, next) {
  knex.raw(`select * from patients`)
    .then(function(data) {
      res.render('list', {
        title: 'Patients',
        list: data.rows
      });
    })
});

// //FORM FOR CREATING NEW PLAYER******
// router.get('/new', function(req, res, next) {
//   //make a join table to join doctor with patient on line 38
//   knex.raw('select * from patients')
//   //*****still have to make new patient view*****
//   res.render('createPatient');
// });
//
//
// //SHOW SINGLE PLAYER INFO*******
// router.get('/:id', function(req, res, next) {
//   //make a join table to join doctor with patient on line 24
//   knex.raw(`select * from patients`)
//     .then(function(data) {
//       res.render('list', {
//         title: 'Patients',
//         list: data.rows[0]
//       });
//       //console.log('working');
//     })
// });
//
// //CREATE NEW PLAYER******
// router.post('/', function(req, res, next) {
//   console.log(req.body);
//   knex.raw(`insert into patients() values ('$req.body.whatever', `)
//     .then(function(data) {
//       //have to create editplayer view
//       res.render('/editPlater')
//     });
// });
//
// //GET EDIT FORM FOR UPDATING PLAYER******
// router.post('/:id/edit', function(req, res, next) {
//   knex.raw(`select * from patients join something`)
//     .then(function(data) {
//     res.render('/patients', {patient: data.rows}
//     });
// });
//
// //UPDATE PLAYER******
// router.post('/:id', function(req, res, next) {
//   knex.raw(`Update patients set name = ${req.body.name}`)
//     .then(function(data) {
//       res.redirect(`/patients/${req.params.id}`)
//     });
// });
//
// //DELETE PLAYER******
// router.post('/:id/delete', function(req, res, next) {
//   knex.raw(`delete from patients where ...`)
//     .then(function(data) {
//       res.redirect(`/patients`)
//     });
// });

module.exports = router;
