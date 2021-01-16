/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const subscribeToNewUsers = /* GraphQL */ `
  subscription SubscribeToNewUsers {
    subscribeToNewUsers {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $id: ID
    $email: AWSEmail
    $name: String
    $rawImage: String
    $alignedImage: String
  ) {
    onCreateUser(
      id: $id
      email: $email
      name: $name
      rawImage: $rawImage
      alignedImage: $alignedImage
    ) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $id: ID
    $email: AWSEmail
    $name: String
    $rawImage: String
    $alignedImage: String
  ) {
    onUpdateUser(
      id: $id
      email: $email
      name: $name
      rawImage: $rawImage
      alignedImage: $alignedImage
    ) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $id: ID
    $email: AWSEmail
    $name: String
    $rawImage: String
    $alignedImage: String
  ) {
    onDeleteUser(
      id: $id
      email: $email
      name: $name
      rawImage: $rawImage
      alignedImage: $alignedImage
    ) {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $id: ID
    $encoding: String
    $mixedImage: String
    $matched: Boolean
  ) {
    onCreateMatch(
      id: $id
      encoding: $encoding
      mixedImage: $mixedImage
      matched: $matched
    ) {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $id: ID
    $encoding: String
    $mixedImage: String
    $matched: Boolean
  ) {
    onUpdateMatch(
      id: $id
      encoding: $encoding
      mixedImage: $mixedImage
      matched: $matched
    ) {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $id: ID
    $encoding: String
    $mixedImage: String
    $matched: Boolean
  ) {
    onDeleteMatch(
      id: $id
      encoding: $encoding
      mixedImage: $mixedImage
      matched: $matched
    ) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $id: ID
    $content: String
    $createdAt: AWSDateTime
  ) {
    onCreateMessage(id: $id, content: $content, createdAt: $createdAt) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $id: ID
    $content: String
    $createdAt: AWSDateTime
  ) {
    onUpdateMessage(id: $id, content: $content, createdAt: $createdAt) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $id: ID
    $content: String
    $createdAt: AWSDateTime
  ) {
    onDeleteMessage(id: $id, content: $content, createdAt: $createdAt) {
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
