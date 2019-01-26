const express = require('express');
const mongoose = require('mongoose');
require('./models/User')
require('./services/passport');



const { mongoURI } = require('./config/keys')

mongoose.connect(mongoURI)

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);