const model = require('./../models');
const fs = require('fs');

const data = `${__dirname}/../data/actions.data.json`;

module.exports = (req, res) => {
	let dataFile = fs.readFileSync(data, 'utf8');
	console.log(`dataFile : ${dataFile}`);

	// let dataParse = JSON.parse(dataFile);
	// console.log(`dataParse : ${dataParse}`);

	const newObj = {
		"tache" : "manger"
	};
	dataFile["action"].push(newObj);
	//
	// dataFile = JSON.stringify(dataParse);
	// console.log(`dataFile new : ${dataFile}`);
	// dataFile.actions = [...data.actions, newObj];
	// console.log(`data.actions : ${JSON.stringify(data.actions)}`);
	// let newData = JSON.stringify(data.actions);
	// fs.writeFileSync(dataFile, newData);
	// console.log(`dataFile : ${fs.readFileSync(dataFile, data)}`);

  res.render('pages/index', {actions: model.actionList.list});
};
