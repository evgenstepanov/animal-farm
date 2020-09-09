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
  process.env.MONGODB_URI || 'mongodb+srv://stepanov:stepanov@cluster0.a38ve.mongodb.net/animal-farm',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log('connected to db')
);

app.use(cors());
app.use('/images', express.static(path.join(__dirname, '../client/img')));
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

require('./routes/animalRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../../dist')));
  app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  });
} else if (process.env.NODE_ENV === 'development') {
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
}

module.exports = app;
