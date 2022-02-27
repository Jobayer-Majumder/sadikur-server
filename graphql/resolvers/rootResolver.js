const {
    GraphQLUpload
  } = require('graphql-upload');
const userResolvers = require('./userResolver');
const reviewResolvers = require('./reviewsResolver');
const workResolvers = require('./worksResolver');



const resolvers = {
    Query: {
        ...workResolvers.Query,
        ...reviewResolvers.Query,
        ...userResolvers.Query
    },
    Upload: GraphQLUpload,
    Mutation: {
        ...workResolvers.Mutation,
        ...reviewResolvers.Mutation,
        ...userResolvers.Mutation
    },
}

module.exports = resolvers;