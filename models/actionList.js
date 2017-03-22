const ActionModel = require('./action.model');


class ActionList {
	constructor(data) {
		this.list = data.map(item => new ActionModel(item));
	}

	add(data) {
		console.log('data : ', JSON.stringify(data));
		const action = new ActionModel(data);
		if (action) {
			this.list = [...this.list, action];
		}
		return action;
	}
}

module.exports = ActionList;
