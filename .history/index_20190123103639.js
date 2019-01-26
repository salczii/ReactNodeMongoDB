const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds163984.mlab.com:63984/emaily-dev')

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);