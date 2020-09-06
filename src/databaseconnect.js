const mongoose = require('mongoose')
const urlbd = 'mongodb://localhost/mern-stack'

mongoose.connect(urlbd, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }).then(db => console.log('base de datos conectada'))
.catch(error=>console.log(error))


module.exports = mongoose       