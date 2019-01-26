const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const userSchema = new Schema({
    googleId: String,
})

mongoose.model('users', userSchema)