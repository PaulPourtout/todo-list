const model = require('./../models');

module.exports = (req, res) => {
	res.render('pages/index', {
		actions: model.actionList.list
	});
	
	// model.actionList.list.map( action => {
	// 	console.log("tache : ", action.tache);
	// });
};
