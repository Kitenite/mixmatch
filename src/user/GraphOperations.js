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
    content:content,
    matchID:matchID,
    senderID:senderID,
  }
  return executeOperation(createMessageMutation, params).getUser
}

export const subscribeToCreateMessage = (matchID) => {
  const params = {
    matchID:matchID
  }
  return API.graphql(graphqlOperation(createMessageSubscription, params))
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

const createMessageMutation = /* GraphQL */ `
  mutation CreateMessage($content:String!, $matchID:ID!, $senderID:ID!) {
  createMessage(input: {
    content: $content, 
    matchID: $matchID, 
    senderID: $senderID
    }) {
      content
      createdAt
      id
      matchID
      senderID
  }
}
`

const createMessageSubscription = /* GraphQL */ `
  subscription CreateMessageSubscription($matchID:ID!) {
    onMessageCreatedByMatch(matchID: $matchID) {
      content
      createdAt
      id
      senderID
    }
  }
`