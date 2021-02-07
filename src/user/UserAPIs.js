import { API, graphqlOperation } from 'aws-amplify';

import { getUser, getMatch } from "../graphql/queries";

export const getUserData = async (id) => {
  try {
    const response = await API.graphql(graphqlOperation(getUser, { id: id }));
    return response.data.getUser
  } catch (err) {
    console.log('error: ', err)
  }
}

export const getMatchData = async (id) => {
  try {
    const response = await API.graphql(graphqlOperation(getMatch, { id: id }));
    return response.data.getUser
  } catch (err) {
    console.log('error: ', err)
  }
}
