/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
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
        matches {
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
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMatchUser = /* GraphQL */ `
  query GetMatchUser($id: ID!) {
    getMatchUser(id: $id) {
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
export const listMatchUsers = /* GraphQL */ `
  query ListMatchUsers(
    $filter: ModelMatchUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matcher {
          id
          email
          name
          rawImage
          alignedImage
          encoding
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
          createdAt
          updatedAt
        }
        createdAt
        liked
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        match {
          id
          encoding
          mixedImage
          matched
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
