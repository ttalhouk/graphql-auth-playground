import gql from 'graphql-tag';

const logout = gql`
mutation{
  logout{
    id
    email
  }
}
`;

module.exports = {logout};
