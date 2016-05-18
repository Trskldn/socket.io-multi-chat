var schema = require('validate');

module.exports = schema({
  username: {
    type: 'string',
    required: true,
    message: 'Username is required',
    match: /[a-z]{2,15}/
  },
  password: {
    type: 'string',
    required: true,
    message: 'Password is required'
  }
});