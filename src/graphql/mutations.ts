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
      name
      email
      rawImage
      alignedImage
      encoding
      matchUsers {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      matches {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          senderID
          matchID
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
      name
      email
      rawImage
      alignedImage
      encoding
      matchUsers {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      matches {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          senderID
          matchID
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
      name
      email
      rawImage
      alignedImage
      encoding
      matchUsers {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      matches {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          senderID
          matchID
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
      matchStatus
      matchID
      match {
        id
        matched
        encoding
        mixedImage
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      sourceUserID
      sourceUser {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      targetUserID
      targetUser {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
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
export const updateMatchUser = /* GraphQL */ `
  mutation UpdateMatchUser(
    $input: UpdateMatchUserInput!
    $condition: ModelMatchUserConditionInput
  ) {
    updateMatchUser(input: $input, condition: $condition) {
      id
      matchStatus
      matchID
      match {
        id
        matched
        encoding
        mixedImage
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      sourceUserID
      sourceUser {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      targetUserID
      targetUser {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
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
export const deleteMatchUser = /* GraphQL */ `
  mutation DeleteMatchUser(
    $input: DeleteMatchUserInput!
    $condition: ModelMatchUserConditionInput
  ) {
    deleteMatchUser(input: $input, condition: $condition) {
      id
      matchStatus
      matchID
      match {
        id
        matched
        encoding
        mixedImage
        users {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      sourceUserID
      sourceUser {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      targetUserID
      targetUser {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
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
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      matched
      encoding
      mixedImage
      users {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          senderID
          matchID
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
      matched
      encoding
      mixedImage
      users {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          senderID
          matchID
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
      matched
      encoding
      mixedImage
      users {
        items {
          id
          matchStatus
          matchID
          sourceUserID
          targetUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          senderID
          matchID
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
      content
      senderID
      sender {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchID
      match {
        id
        matched
        encoding
        mixedImage
        users {
          nextToken
        }
        messages {
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
      content
      senderID
      sender {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchID
      match {
        id
        matched
        encoding
        mixedImage
        users {
          nextToken
        }
        messages {
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
      content
      senderID
      sender {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matchUsers {
          nextToken
        }
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      matchID
      match {
        id
        matched
        encoding
        mixedImage
        users {
          nextToken
        }
        messages {
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
