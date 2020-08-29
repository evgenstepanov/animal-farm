const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT ? process.env.PORT : 8080;
const mongoose = require('mongoose');
app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log('connected to db')
);

app.use(cors());

require('./routes/animalRoutes')(app);

const webpack = require('webpack');
const config = require(path.join(__dirname, '../../webpack.config'));
const compiler = webpack(config);
app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: 'errors-only',
  })
);
app.use(require('webpack-hot-middleware')(compiler));
app.listen(PORT, () => {
  console.log(`Server listening port: ${PORT}`);
});

module.exports = app;
