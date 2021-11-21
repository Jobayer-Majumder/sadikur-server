const {
  buildSchema
} = require('graphql');


const worksSchema = buildSchema(`
  type Works {
    _id: ID
    title: String
    category: String
    file: String
    publishDate: String
  }

  input WorksInput {
    title: String
    category: String
    file: String
    publishDate: String
  }

  type Reviews {
    _id: ID
    name: String
    img: String
    company: String
    comment: String
    review: Int
  }
  input ReviewInput {
    name: String
    img: String
    company: String
    comment: String
    review: Int
  }

  type RootQuery {  
    works: [Works]
    reviews: [Reviews]
  }

  type RootMutation {
    addWorks(input: WorksInput): Works
    addReview(input: ReviewInput) : Reviews
  }

  schema {
    query: RootQuery,
    mutation: RootMutation
  }

`);

module.exports = {
  worksSchema
}