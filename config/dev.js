require('dotenv').config();

module.exports = {
  googleClientID: `${process.env.GOOGLE_CLIENT_ID}`,
  googleClientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  mongoURI: `mongodb://${process.env.MONGO_USERNAME_DEV}:${process.env.MONGO_PASSWORD_DEV}@ds117250.mlab.com:17250/adv_nod_experiment`,
  cookieKey: `${process.env.COOKIE_KEY}`,
  redisUrl: 'redis://127.0.0.1:6379',
  accessKeyId: `${process.env.ACCESS_KEY_ID}`,
  secretAccessKey: `${process.env.SECRET_ACCESS_KEY}`
};
