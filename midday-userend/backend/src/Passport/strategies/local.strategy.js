const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../../Models/userModel');

function LocalStrategy () {
  passport.use(
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      (email, password, done) => {
        (() => {
          User.findOne({ email }, (err, user) => {
            if (err) { return done(err); }

            if (!user) {
              console.log('hola');
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('oie que retorno');
            return done(null, user);
          });
        })();
      }
    )

  );
}

module.exports = LocalStrategy;
