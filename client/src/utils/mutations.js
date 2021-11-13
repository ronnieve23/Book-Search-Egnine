import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user{
                _id
                username
                email
            }   
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput!){
        saveBook(input: $input){
            _id
            username
            email
            savedBooks {
                bookId
                title
                image
                description
                link
                authors
            }
        }
    }

`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId){
            _id
            username
            email
            savedBooks {
                bookId
                title
                image
                description
                link
                authors
            }
        }
    }
`


export default { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK }
