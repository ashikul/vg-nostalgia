import passport from 'passport';
import {OAuth2Strategy as GoogleStrategy} from 'passport-google-oauth';

export function setup(User, config) {
    passport.use(new GoogleStrategy({
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,
            callbackURL: config.google.callbackURL
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOne({'google.id': profile.id}).exec()
                .then(user => {
                if (user) {
                    return done(null, user);
                }

                user = new User({
                name: profile.displayName,
                email: profile.emails[0].value,
                role: 'user',
                username: profile.emails[0].value.split('@')[0],
                provider: 'google',
                google: profile._json
            });
            user.save()
                .then(user => done(null, user)
            )
            .catch(err => done(err)
            )
        })
            .catch(err => done(err)
            )
        }));
}
