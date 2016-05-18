var neDB = require('nedb');
var path = require('path');
var db = {};

db.users = new neDB({filename: path.join(__dirname, 'users.db'), autoload: true});
db.users.ensureIndex({fieldName: 'username', unique: true});
db.usersSchema = require('./usersSchema');


module.exports = db;