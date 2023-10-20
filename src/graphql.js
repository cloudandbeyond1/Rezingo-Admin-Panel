import  {gql}  from '@apollo/client';

export const INSERT_CATEGORY = gql`
mutation items($name: String!, $description: String!) {
    category(name: $name, description: $description) {      
       name
      description
    }
  }

`;

export const GET_DATA =  gql`
query items {
  category {
    name
    description
  }
}
`;