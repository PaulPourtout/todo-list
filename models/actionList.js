const ActionModel = require('./action.model');
const fs = require('fs');
let jsonFile = `${__dirname}/../data/actions.data.json`;

class ActionList {
	constructor(data) {
		this.list = data.map(item => new ActionModel(item));
	}

	add(data) {
		console.log('data : ', JSON.stringify(data));

		let dataFile = fs.readFileSync(jsonFile);
		let fileContent = JSON.parse(dataFile);

		const action = new ActionModel(data);
		if (action) {
			fileContent.actions.push(action);

			const newJson = JSON.stringify(fileContent);
			fs.writeFileSync(jsonFile, newJson);
		}
		return action;
	}
}

module.exports = ActionList;
