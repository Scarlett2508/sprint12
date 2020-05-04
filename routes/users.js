const routes = require('express').Router();
const users = require('../data/users');

routes.get('/users', (req, res) => {
  res.status(200).json(users);
});

routes.all('/users/:_id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userReq = req.params._id;
  // eslint-disable-next-line no-underscore-dangle
  const userFind = users.find((m) => m._id === userReq);
  if (userFind) {
    res.status(200).json(userFind);
  } else {
    res.status(404).json({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = routes;
