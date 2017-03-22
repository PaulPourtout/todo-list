const model = require('./../models');
const fs = require('fs');

const get = (req, res) => {
  res.render('pages/add');
};

const post = (req, res) => {
  const tache = model.actionList.add(req.body);
  if (tache) {

    res.render('pages/added', {tache});
  } else {
    res.render('pages/error', {tache});
  }
};

module.exports = {
  get,
  post
};
