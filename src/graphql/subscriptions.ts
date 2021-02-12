/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMatchUser = /* GraphQL */ `
  subscription OnCreateMatchUser {
    onCreateMatchUser {
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
export const onUpdateMatchUser = /* GraphQL */ `
  subscription OnUpdateMatchUser {
    onUpdateMatchUser {
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
export const onDeleteMatchUser = /* GraphQL */ `
  subscription OnDeleteMatchUser {
    onDeleteMatchUser {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
