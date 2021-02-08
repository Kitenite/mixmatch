/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMatchUser = /* GraphQL */ `
  subscription OnCreateMatchUser {
    onCreateMatchUser {
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
export const onUpdateMatchUser = /* GraphQL */ `
  subscription OnUpdateMatchUser {
    onUpdateMatchUser {
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
export const onDeleteMatchUser = /* GraphQL */ `
  subscription OnDeleteMatchUser {
    onDeleteMatchUser {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
