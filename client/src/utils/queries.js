import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      books {
        authors 
        description 
        title
        bookId 
        image 
        link
    }
  }
`;

export const GET_ME = gql`
  {
    me {
        _id
      username
      email
      bookCount
      books {
      authors
      description
      title
      bookId 
      image 
      link
    }
  }
`;

export const QUERY_BOOKS = gql `
query books($title: String) {
 books(title: $title) {
    authors 
    description
    title
    bookId
    image 
    link
  }
}
`;

export const  QUERY_SAVEDBOOKS = gql `
    query savedBooks($username: String) {
        savedBooks(username: $username) {
            authors
            description
            title
            bookId 
            image 
            link
        }
    }
`
