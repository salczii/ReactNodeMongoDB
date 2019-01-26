const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
})

mongoose.model('users', userSchema)