const model = require('./../models');



module.exports = (req, res) => {

  res.render('pages/index', {actions: model.actionList.list});
};
