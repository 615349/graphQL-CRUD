const Promise = require('bluebird');
const mongoose = require('mongoose');

const config = {
  promiseLibrary: Promise,
  useNewUrlParser: true
}
mongoose.connect('mongodb://localhost/node-graphql', config)
  .then(() => console.log('connection successful'))
  .catch(err => console.error(err));
