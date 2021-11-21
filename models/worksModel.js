const mongoose = require('mongoose');


const WorksModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('works', WorksModel)