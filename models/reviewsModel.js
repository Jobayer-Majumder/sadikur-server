const mongoose = require('mongoose')


const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    review: {
        type: Number
    }
    
}, {timestamps: true})


module.exports = mongoose.model('reviews', ReviewSchema)