const reviewsResolver = require('./reviewsResolver');
const worksResolver = require('./worksResolver')

const rootResolver = {
    ...worksResolver,
    ...reviewsResolver
}

module.exports = rootResolver;