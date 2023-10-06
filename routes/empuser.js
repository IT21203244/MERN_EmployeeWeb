const router = require('express').Router();
let Empuser = require('../models/empuser.model');

router.route('/').get((req, res) => {
    Empuser.find()
    .then(empuser => res.json(empuser))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  
  const newEmpuser = new Empuser({
    email,
    password,
  });

  newEmpuser.save()
  .then(() => res.json('New Employee added to the system!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Empuser.findOne({ email: email, password: password })
    .then(empuser => {
      if (empuser) {
        res.status(200).json({ message: 'Login successful!' });
      } else {
        res.status(401).json({ message: 'Invalid email or password!' });
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Empuser.findById(req.params.id)
    .then(empuser => res.json(empuser))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;