const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');

mongoose.connect(mongoURI, { useNewUrlParser: true });

require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI)

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);