/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      firstName
      lastName
      rawImage
      alignedImage
      encoding
      matches
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      email
      firstName
      lastName
      rawImage
      alignedImage
      encoding
      matches
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      email
      firstName
      lastName
      rawImage
      alignedImage
      encoding
      matches
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch($input: CreateMatchInput!) {
    createMatch(input: $input) {
      id
      users
      encoding
      mixedImage
      matched
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch($input: UpdateMatchInput!) {
    updateMatch(input: $input) {
      id
      users
      encoding
      mixedImage
      matched
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch($input: DeleteMatchInput!) {
    deleteMatch(input: $input) {
      id
      users
      encoding
      mixedImage
      matched
    }
  }
`;
