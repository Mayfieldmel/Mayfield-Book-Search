import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOKS = gql`
  mutation saveBook($bookId: String) {
    saveBook(bookId: $bookId) {
        authors
        description
        title
        bookId
        image
        link
    }
  }
`;

export const REMOVE_BOOKS = gql`
  mutation removeBook($bookId: String) {
    removeBook(bookId: $bookId) {
     
    }
  }
`;