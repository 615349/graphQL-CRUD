const Promise = require('bluebird');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const cors = require('cors');
const schema = require('./schema/schema');

const app = express();
app.use(cors());

const config = {
  promiseLibrary: Promise,
  useNewUrlParser: true
}
mongoose.connect('mongodb://localhost/test', config)
  .then(() => console.log('connection successful'))
  .catch(err => console.error(err));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});

