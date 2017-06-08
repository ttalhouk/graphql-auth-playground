import gql from 'graphql-tag';


const currentUser = gql`
{
  currentUser {
    id
    email
  }
}
`;

module.exports = {currentUser}
