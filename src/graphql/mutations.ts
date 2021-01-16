/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addUser = /* GraphQL */ `
  mutation AddUser($id: ID!, $email: AWSEmail!, $name: String!) {
    addUser(id: $id, email: $email, name: $name) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        id
        encoding
        mixedImage
        matched
      }
      createdAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        id
        encoding
        mixedImage
        matched
      }
      createdAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        id
        encoding
        mixedImage
        matched
      }
      createdAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        id
        encoding
        mixedImage
        matched
      }
      createdAt
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch($input: CreateMatchInput!) {
    createMatch(input: $input) {
      id
      users {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
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
      users {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
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
      users {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      encoding
      mixedImage
      matched
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
      match {
        id
        encoding
        mixedImage
        matched
      }
      content
      author {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      recepient {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      createdAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage($input: UpdateMessageInput!) {
    updateMessage(input: $input) {
      id
      match {
        id
        encoding
        mixedImage
        matched
      }
      content
      author {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      recepient {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      createdAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
      id
      match {
        id
        encoding
        mixedImage
        matched
      }
      content
      author {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      recepient {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      createdAt
    }
  }
`;
