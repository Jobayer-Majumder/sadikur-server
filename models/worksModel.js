const mongoose = require('mongoose');


const WorksModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    file: { 
        type: Buffer, 
    }
}, { timestamps: true });

module.exports = mongoose.model('works', WorksModel)