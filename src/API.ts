/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  email: string,
  firstName: string,
  lastName: string,
  rawImage?: string | null,
  alignedImage?: string | null,
  encoding?: string | null,
  matches?: Array< string | null > | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  rawImage?: string | null,
  alignedImage?: string | null,
  encoding?: string | null,
  matches?: Array< string | null > | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMatchInput = {
  users: Array< string | null >,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type UpdateMatchInput = {
  id: string,
  users?: Array< string | null > | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type DeleteMatchInput = {
  id: string,
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null,
  email?: TableStringFilterInput | null,
  firstName?: TableStringFilterInput | null,
  lastName?: TableStringFilterInput | null,
  rawImage?: TableStringFilterInput | null,
  alignedImage?: TableStringFilterInput | null,
  encoding?: TableStringFilterInput | null,
  matches?: TableIDFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableMatchFilterInput = {
  id?: TableIDFilterInput | null,
  users?: TableIDFilterInput | null,
  encoding?: TableStringFilterInput | null,
  mixedImage?: TableStringFilterInput | null,
  matched?: TableBooleanFilterInput | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput,
};

export type CreateMatchMutation = {
  createMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type UpdateMatchMutationVariables = {
  input: UpdateMatchInput,
};

export type UpdateMatchMutation = {
  updateMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type DeleteMatchMutationVariables = {
  input: DeleteMatchInput,
};

export type DeleteMatchMutation = {
  deleteMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: TableUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      firstName: string,
      lastName: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches: Array< string | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMatchQueryVariables = {
  id: string,
};

export type GetMatchQuery = {
  getMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type ListMatchesQueryVariables = {
  filter?: TableMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchesQuery = {
  listMatches:  {
    __typename: "MatchConnection",
    items:  Array< {
      __typename: "Match",
      id: string,
      users: Array< string | null >,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  rawImage?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  rawImage?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  rawImage?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches: Array< string | null > | null,
  } | null,
};

export type OnCreateMatchSubscriptionVariables = {
  id?: string | null,
  users?: Array< string | null > | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type OnUpdateMatchSubscriptionVariables = {
  id?: string | null,
  users?: Array< string | null > | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type OnDeleteMatchSubscriptionVariables = {
  id?: string | null,
  users?: Array< string | null > | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch:  {
    __typename: "Match",
    id: string,
    users: Array< string | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};
