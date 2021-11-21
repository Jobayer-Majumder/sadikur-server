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
        try {
            const review = new ReviewsModel({
                name: args.input.name,
                company: args.input.company,
                comment: args.input.comment,
                img: args.input.img,
                review: args.input.review
            })
            const result = await review.save();
            return result
        }catch(error){
            throw new Error('something wrong with database')
        }
    }

}