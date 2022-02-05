const userResolver = require('./userResolver');
const reviewsResolver = require('./reviewsResolver');
const worksResolver = require('./worksResolver')

const rootResolver = {
    ...worksResolver,
    ...reviewsResolver,
    ...userResolver
}

module.exports = rootResolver;