const loginResolver = require('./loginResolver');
const reviewsResolver = require('./reviewsResolver');
const worksResolver = require('./worksResolver')

const rootResolver = {
    ...worksResolver,
    ...reviewsResolver,
    ...loginResolver
}

module.exports = rootResolver;