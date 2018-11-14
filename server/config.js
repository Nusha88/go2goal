module.exports = {
  AUTH0_DOMAIN: 'nusha.eu.auth0.com', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: 'https://go2goal.herokuapp.com:8083/api/', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://ann:1111@ds033126.mlab.com:33126/cardsauth',
  NAMESPACE: 'http://myapp.com/roles'
};
