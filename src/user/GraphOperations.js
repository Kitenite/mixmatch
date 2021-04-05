import { API, graphqlOperation } from 'aws-amplify';
import { getUser, getMatch } from "../graphql/queries";

export const getUserData = async (id) => {
  try {
    const params = {
        id: id
    }
    const response = await await API.graphql(graphqlOperation(getUser, params));
    return response.data.getUser
  } catch (err) {
    console.log('error getting user: ', err)
  }
}

export const getMatchData = async (id) => {
  try {
    const params = {
      id: id
    }
    const response = await API.graphql(graphqlOperation(getMatch, params));
    return response.data.getUser
  } catch (err) {
    console.log('error getting match: ', err)
  }
}

export const getMatchesFromUser = async (id) => {
  try {
    const params = {
        id: id
    }
    const response = await await API.graphql(graphqlOperation(getMatchesFromUserQuery, params));
    return response.data.getUser
  } catch (err) {
    console.log('error getting user: ', err)
  }
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