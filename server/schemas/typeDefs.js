// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
  type Auth {
    token: ID!
    user: User
  }
type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
  }
`;

// export the typeDefs
module.exports = typeDefs;