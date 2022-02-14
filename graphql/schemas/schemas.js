const {
  buildSchema
} = require('graphql');


const schemas = buildSchema(`

  scalar Date

  type Works {
    _id: ID
    title: String
    description: String
    category: String
    file: String
    createdAt: Date
    updatedAt: Date
  }

  input WorksInput {
    title: String
    description: String
    category: String
    file: String
  }

  type Reviews {
    _id: ID
    name: String
    img: String
    company: String
    comment: String
    review: Int
    createdAt: Date
    updatedAt: Date
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
    createdAt: Date
    updatedAt: Date
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
    makeAdmin(input: UserInput): Users
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