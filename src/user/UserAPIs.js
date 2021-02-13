import { API, graphqlOperation } from 'aws-amplify';
import { getUser, getMatch } from "../graphql/queries";

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
