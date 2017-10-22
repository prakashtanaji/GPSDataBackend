'use strict';

// newItem = require('./api/models/gpicsnew');

exports.recent10 = function(req, res) {
    res.json('{newItem}');
};

exports.createnew = function(req, res) {
    res.json(101);
};


exports.readId = function(req, res) {
    res.json('newItem2');
};


exports.activeId = function(req, res) {
    res.json(true);
};


exports.inactiveId = function(req, res) {
    res.json({ message: 'Item successfully inactivated' });
};