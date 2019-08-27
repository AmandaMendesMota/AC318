const mongoose = require('mongoose');

const URL = 'mongodb://localhost/mean-crud';

mongoose.connect(URL, {
    useNewUrlParser:true
})
    .then(function(db) {
        console.log('DB is connected')
    })
    .catch(err=>console.error(err));

module.exports = mongoose;
