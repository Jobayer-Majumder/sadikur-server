const {
  buildSchema
} = require('graphql');


const schemas = buildSchema(`
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

  type Users {
    name: String
    email: String
    password: String
    role: String
  }
  input UserInput {
    name: String
    email: String
    password: String
    role: String
  }

  type FindUser {
    token: String
  }

  input FindUserInput {
    email: String
    password: String
  }
  
  type RootQuery {  
    works: [Works]
    reviews: [Reviews]
    users: [Users]
  }

  type RootMutation {
    addWorks(input: WorksInput): Works
    addReview(input: ReviewInput) : Reviews
    addUser(input: UserInput): Users
    findUser(input: FindUserInput): FindUser
  }

  schema {
    query: RootQuery,
    mutation: RootMutation
  }

`);

module.exports = {
  schemas
}