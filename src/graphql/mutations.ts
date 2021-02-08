/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        items {
          id
          encoding
          mixedImage
          matched
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        items {
          id
          encoding
          mixedImage
          matched
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      matches {
        items {
          id
          encoding
          mixedImage
          matched
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMatchUser = /* GraphQL */ `
  mutation CreateMatchUser(
    $input: CreateMatchUserInput!
    $condition: ModelMatchUserConditionInput
  ) {
    createMatchUser(input: $input, condition: $condition) {
      id
      matcher {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchee {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      liked
      updatedAt
    }
  }
`;
export const updateMatchUser = /* GraphQL */ `
  mutation UpdateMatchUser(
    $input: UpdateMatchUserInput!
    $condition: ModelMatchUserConditionInput
  ) {
    updateMatchUser(input: $input, condition: $condition) {
      id
      matcher {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchee {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      liked
      updatedAt
    }
  }
`;
export const deleteMatchUser = /* GraphQL */ `
  mutation DeleteMatchUser(
    $input: DeleteMatchUserInput!
    $condition: ModelMatchUserConditionInput
  ) {
    deleteMatchUser(input: $input, condition: $condition) {
      id
      matcher {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchee {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      liked
      updatedAt
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          createdAt
          liked
          updatedAt
        }
        nextToken
      }
      encoding
      mixedImage
      matched
      messages {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          createdAt
          liked
          updatedAt
        }
        nextToken
      }
      encoding
      mixedImage
      matched
      messages {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          createdAt
          liked
          updatedAt
        }
        nextToken
      }
      encoding
      mixedImage
      matched
      messages {
        items {
          id
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      match {
        id
        users {
          nextToken
        }
        encoding
        mixedImage
        matched
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      author {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      recepient {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      match {
        id
        users {
          nextToken
        }
        encoding
        mixedImage
        matched
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      author {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      recepient {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      match {
        id
        users {
          nextToken
        }
        encoding
        mixedImage
        matched
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      author {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      recepient {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
