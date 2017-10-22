'use strict';
module.exports = function(app) {
  var gpicsOp = require('../controllers/gpicscontroller');

  // todoList Routes
  app.route('/gpics')
    .get(gpicsOp.recent10)
    .post(gpicsOp.createnew);
  app.route('/gpics/:Id')
    .get(gpicsOp.readId)
    .put(gpicsOp.activeId)
    .delete(gpicsOp.inactiveId);
};