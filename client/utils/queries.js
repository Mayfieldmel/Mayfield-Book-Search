import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      books {
        authors: [String], 
        description: String, 
        title: String, 
        bookId: String, 
        image: String, 
        link: String
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
        _id
      username
      email
      bookCount
      books {
      authors: [String], 
      description: String, 
      title: String, 
      bookId: String, 
      image: String, 
      link: String
    }
  }
`;

export const QUERY_BOOKS = gql `
query books($title: String) {
 books(title: $title) {
    authors: [String], 
    description: String, 
    title: String, 
    bookId: String, 
    image: String, 
    link: String
  }
}
`;

export const  QUERY_SAVEDBOOKS = gql `
    query savedBooks($username: String) {
        savedBooks(username: $username) {
            authors: [String], 
            description: String,
            title: String, 
            bookId: String, 
            image: String, 
            link: String
        }
    }
`
