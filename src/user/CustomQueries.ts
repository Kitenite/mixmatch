export const getUser = /* GraphQL */ `
query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    alignedImage
    matches {
      items {
        id
        matchStatus
        matchID 
        targetUser {
            id
            name
        }
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

export const updateMatch = /* GraphQL */ `
  mutation UpdateMatchUser(
    $input: UpdateMatchUserInput!
    $condition: ModelMatchUserConditionInput
  ) {
    updateMatchUser(input: $input, condition: $condition) {
      id
      matchStatus
      matchID
      updatedAt
    }
  }
`;