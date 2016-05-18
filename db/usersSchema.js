module.exports = {
  username: {
    presence: true,
    format:{
      pattern: '[a-z0-9]+',
      flags: "i",
      message: "can only contain a-z and 0-9" 
    }
  },
  password: {
    presence: true,
    length: {
      minimum: 3
    }
  }
};