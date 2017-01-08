var express = require('express');
var router = express.Router();

var users = [];

router.get('/users', function(req, res, next) {
  res.send(users);
});

router.get('/users/:id', function(req, res, next) {
  var user = users.find(function(user) {
    return user.id == req.params.id;
  });
  res.send(!user ? 'Unable to Find User' : user);
});

router.post('/users', function(req, res, next) {
  var user = req.body;
  user.created_at = new Date();
  if (!user.email || !user.forename || !user.surname) {
    res.status(400);
    res.json({
      "error": "Bad Data"
    });
  } else {
    users.push(user);
    res.setHeader('Content-Type', 'application/json');
    res.send(users);
  }
});

router.delete('/users/:id', function(req, res, next) {
  var deletedIndex = users.findIndex(function(user) {
    return user.id == req.params.id;
  });
  if (deletedIndex == -1) {
    res.status(400);
    res.json({
      "error": "User is not present"
    });
  } else {
    var deletedUser = users.splice(deletedIndex, 1);
    res.send('User deleted');
  }
});

router.put('/users/:id', function(req, res, next) {
  var edit = req.body;

  for (var i = 0; i < users.length; i++) {
    if (users[i].id == req.params.id) {
      if (edit.email) {
        users[i].email = edit.email;
      }
      if (edit.forename) {
        users[i].forename = edit.forename;
      }
      if (edit.surname) {
        users[i].surname = edit.surname;
      }
    }
  }
  
  res.send('User edited');

});


module.exports = router;
