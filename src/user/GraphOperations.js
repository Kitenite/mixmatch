import { API, graphqlOperation } from 'aws-amplify';
import { getUser, getMatch } from "../graphql/queries";

const executeOperation = async (operation, params) => {
  try {
     const response = await API.graphql(graphqlOperation(operation, params));
     return response.data
  } catch (err) {
    console.log('Error executing operation: ', err)
  }
}

export const getUserData = async (id) => {
  const params = {
      id: id
  }
  return (await executeOperation(getUser, params)).getUser
}

export const getMatchData = async (id) => {
  const params = {
    id: id
  }
  return (await executeOperation(getMatch, params)).getMatch
}

export const getMatchesFromUser = async (id) => {
  const params = {
      id: id
  }
  return (await executeOperation(getMatchesFromUserQuery, params)).getUser
}

export const createMessage = (matchID, senderID, content) => {
  const params = {
    matchID:matchID,
    senderID:senderID,
    content:content
  }
  return executeOperation(createMessageQuery, params).getUser
}


const getMatchesFromUserQuery = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      matches {
      items {
        matchStatus
        targetUser {
          name
          alignedImage
          messages {
            items {
              content
              createdAt
              id
              senderID
            }
          }
          id
        }
        matchID
        sourceUser {
          name
          alignedImage
          messages {
            items {
              createdAt
              content
              id
              senderID
            }
          }
          id
        }
      }
    }
    } 
  }
`;

const createMessageQuery = /* GraphQL */ `
  mutation CreateMessage($matchID:ID!, $senderID:ID!, $content:String!) {
    createMessage(input: {
        content: $content, 
        senderID: $senderID
        matchID: $matchID, 
      }) {
      id
      content
      createdAt
    }
  }
`