/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers {
    getUsers {
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      rawImage
      alignedImage
      encoding
      createdAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        rawImage
        alignedImage
        encoding
        createdAt
      }
      nextToken
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
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
export const listMatches = /* GraphQL */ `
  query ListMatches(
    $filter: TableMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        encoding
        mixedImage
        matched
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: TableMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
  }
`;
