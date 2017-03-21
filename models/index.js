const ActionList = require('./actionList');
const data = require('./../data/actions.data');

const actionList = new ActionList(data.actions);

module.exports = { actionList };
