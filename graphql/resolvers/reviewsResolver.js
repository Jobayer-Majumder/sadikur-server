const ReviewsModel = require("../../models/reviewsModel")

module.exports = {
    reviews: async () => {
        try {
            const review = await ReviewsModel.find();
            return review
        } catch (error) {
            throw new Error('something went wrong !')
        }
    },

    addReview: async args => {
        const {name, company, comment, img, review} = args.input;

        try {
            const newReview = new ReviewsModel({
                name: name,
                company: company,
                comment: comment,
                img: img,
                review: review
            })
            const result = await newReview.save();
            return result
        }catch(error){
            throw new Error('something wrong with database')
        }
    },

};