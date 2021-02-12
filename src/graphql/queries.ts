/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      rawImage
      alignedImage
      encoding
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        rawImage
        alignedImage
        encoding
        matches {
          nextToken
        }
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
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
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        matchID
        match {
          id
          matched
          encoding
          mixedImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
