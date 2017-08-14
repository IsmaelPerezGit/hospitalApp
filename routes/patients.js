var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'hospital_app'
  }
});

//GET ALL PATIENTS
router.get('/', function(req, res, next) {
  knex.raw(`select * from patients`)
    .then(function(data) {
      res.render('list', {
        title: 'Patients',
        list: data.rows
      });
    })
});

//FORM FOR CREATING NEW PATIENTS******
router.get('/new', function(req, res, next) {
  knex.raw('select * from patients')
  res.render('createPatient');
});


//SHOW SINGLE PATIENT INFO*******
router.get('/:id', function(req, res, next) {
  //make a join table to join doctor with patient on line 24
  knex.raw(`select patients.*, doctors.name as doctors_name from patients, doctors join appt on doctors.id = doctor_id and doctor_id = patient_id where patients.id = ${req.params.id} `)
    .then(function(data) {
      console.log(data.rows);
      res.render('patientInfo', {
        title: 'Patients',
        list: data.rows
      });
    })
});

//CREATE NEW PATIENT******
router.post('/', function(req, res, next) {
  knex.raw(`insert into patients values(${req.body.res})`)
  .then(function(data) {
    res.render('list', {
      title: 'Patients',
      list: data.rows
    });
  })
});

// //GET EDIT FORM FOR UPDATING PATIENT******
// router.post('/:id/edit', function(req, res, next) {
//   knex.raw(`select * from patients join something`)
//     .then(function(data) {
//     res.render('/patients', {patient: data.rows}
//     });
// });
//
// //UPDATE PATIENT******
// router.post('/:id', function(req, res, next) {
//   knex.raw(`Update patients set name = ${req.body.name}`)
//     .then(function(data) {
//       res.redirect(`/patients/${req.params.id}`)
//     });
// });
//
// //DELETE PATIENT******
// router.post('/:id/delete', function(req, res, next) {
//   knex.raw(`delete from patients where ...`)
//     .then(function(data) {
//       res.redirect(`/patients`)
//     });
// });

module.exports = router;
