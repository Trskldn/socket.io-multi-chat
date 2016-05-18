var db = require('./../db');
var jwt = require('jwt-simple');
var config = require('nconf');
var _ = require('lodash');
const crypto = require('crypto');

var tempUser;
module.exports = function(app) {

  var rooms = require('./rooms.json');
  var users = {};
  var messageId = 0;
  var io = app.get('io');

  var avaliableRooms = {
    '1': {

    }
  };

  io.sockets.on('connect', function(socket) {

    console.log('SOCKET CONNECTTED')

    /*
    catch all socket event
     */
    // socket.on('*', function(data) {
    // });

    socket.on('rooms:read', function() {
      console.log('rooms:read ');
      socket.emit('rooms:read', {
        success: true,
        data: rooms
      });
    });

    socket.on('message', function(data) {
      console.log('MESSAGE ', data);
      console.log('FROM USER', socket.user);
      var user = socket.request.session.user;

      if (!socket.user) return;

      socket.emit('message', {
        'id': messageId++,
        'text': data.text,
        'userId': socket.user._id,
        'user': socket.user.username,
        'threadId': data.threadId,
        'timestamp': Date.now()
      });
    });

    socket.on('message:read', function() {
      console.log('message:read ');
      socket.emit('message:read', rooms);
    });

    var msgSpamInterval = setInterval(function() {
      socket.emit('message', {
        id: messageId++,
        'text': 'test' + messageId,
        'userId': 1,
        user: 'username',
        'threadId': 1,
        timestamp: Date.now()
      });
    }, 3000);

    socket.on('signup', function(data, done) {
      var token, errors = db.usersSchmea.validate(data);

      if (errors.length) {
        return done({
          success: false,
          message: errors.join()
        });
      }

      data.username = data.username.toLowerCase();
      db.users.find({
        username: data.username
      }, function(err, users) {
        if (users.length) {
          return done({
            success: false,
            message: 'username already exist'
          });
        }

        const pswdHash = crypto.createHash('sha256');
        pswdHash.update(data.password);
        data.password = pswdHash.digest('hex');
        db.users.insert(data, function(err, user) {
          if (err) {
            return done({
              success: false,
              message: err
            });
          }
          token = jwt.encode(_.pick(user, ['username', '_id']), config.get('session').secret);

          socket.user = user;
          return done({
            success: true,
            token: token,
            user: user
          });
        });


      });

    });

    socket.on('logout', function(done) {
      delete socket.user;
      done();
    });

    socket.on('login', function(data, done) {
      var username = data && data.username && data.username.toLowerCase(),
        payload;

      if (data.token) {
        try {
          payload = jwt.decode(data.token, config.get('session').secret);
        } catch (e) {
          return done({
            success: false,
            message: 'invalid token'
          });
        }
        db.users.findOne({
          username: payload.username
        }, function(err, user) {
          if (user) {
            socket.user = _.clone(payload);
            return done({
              success: true,
              user: payload,
              token: data.token
            });

          } else {
            return done({
              success: false,
              message: 'invalid token'
            });

          }
        });
      }

      db.users.findOne({
        username: username
      }, function(err, user) {

        if (err || !user) {
          return done({
            success: false,
            message: 'invalid username'
          });
        }

        const pswdHash = crypto.createHash('sha256');
        pswdHash.update(data.password);
        if (user.password !== pswdHash.digest('hex')) {
          done({
            success: false,
            message: 'invalid password'
          });
          return;
        }

        socket.user = _.clone(user);
        done({
          success: true,
          token: jwt.encode(_.pick(user, ['username', '_id']), config.get('session').secret),
          user: user
        });
      });
    });

    socket.on('disconnect', function() {
      console.log('SOCKET DISCONNECTED');
      clearInterval(msgSpamInterval);
    });
  });
};