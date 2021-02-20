import { API, graphqlOperation } from 'aws-amplify';
import { getMatch } from "../graphql/queries";
import { getUser, updateMatch } from "./CustomQueries";

export const getUserData = async (id) => {
  try {
    console.log(id)
    const params = {
        id: id
    }
    const response = await await API.graphql(graphqlOperation(getUser, params));
    console.log(response)
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

export const updateMatchStatus = async (sourceUserID, targetUserID, matchID, userMatchStatus) => {
  try {
    const params = {
      matchStatus: userMatchStatus,
    }
    const conditions = {
      matchID: matchID,
      sourceUserID: sourceUserID,
      targetUserID: targetUserID
    }
    const variables = {
      input: params,
      conditions: conditions
    }
    const response = await API.graphql(graphqlOperation(updateMatch, variables));
    return response.data.updateMatch
  } catch (err) {
    console.log('error updating match: ', err)
  }
}
