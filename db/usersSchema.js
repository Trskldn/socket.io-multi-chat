var schema = require('validate');

module.exports = schema({
  username: {
    type: 'string',
    required: true,
    message: 'Username is required'
  },
  password: {
    type: 'string',
    required: true,
    message: 'Password is required'
  }
});