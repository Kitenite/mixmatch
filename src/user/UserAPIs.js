import { getUser } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

export const getUserData = async (id) => {
  try {
    const response = await API.graphql(graphqlOperation(getUser, { id: id }));
    return response.data.getUser
  } catch (err) {
    console.log('error: ', err)
  }
}
