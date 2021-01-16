/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  email: string,
  name: string,
  rawImage?: string | null,
  alignedImage?: string | null,
  encoding?: string | null,
  createdAt?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  rawImage?: string | null,
  alignedImage?: string | null,
  encoding?: string | null,
  createdAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateMatchInput = {
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type UpdateMatchInput = {
  id: string,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type DeleteMatchInput = {
  id: string,
};

export type CreateMessageInput = {
  content: string,
  createdAt: string,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  createdAt?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type TableUserFilterInput = {
  id?: TableIDFilterInput | null,
  email?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  rawImage?: TableStringFilterInput | null,
  alignedImage?: TableStringFilterInput | null,
  encoding?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
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
  encoding?: TableStringFilterInput | null,
  mixedImage?: TableStringFilterInput | null,
  matched?: TableBooleanFilterInput | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type TableMessageFilterInput = {
  id?: TableIDFilterInput | null,
  content?: TableStringFilterInput | null,
  createdAt?: TableStringFilterInput | null,
};

export type AddUserMutationVariables = {
  id: string,
  email: string,
  name: string,
};

export type AddUserMutation = {
  addUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
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
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
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
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null,
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput,
};

export type CreateMatchMutation = {
  createMatch:  {
    __typename: "Match",
    id: string,
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
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
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
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
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};

export type GetUsersQuery = {
  getUsers:  Array< {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null > | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
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
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
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
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
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
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: TableMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "MessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      createdAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SubscribeToNewUsersSubscription = {
  subscribeToNewUsers:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
  rawImage?: string | null,
  alignedImage?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
  rawImage?: string | null,
  alignedImage?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  id?: string | null,
  email?: string | null,
  name?: string | null,
  rawImage?: string | null,
  alignedImage?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  Array< {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    } | null > | null,
    createdAt: string | null,
  } | null,
};

export type OnCreateMatchSubscriptionVariables = {
  id?: string | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch:  {
    __typename: "Match",
    id: string,
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type OnUpdateMatchSubscriptionVariables = {
  id?: string | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch:  {
    __typename: "Match",
    id: string,
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type OnDeleteMatchSubscriptionVariables = {
  id?: string | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: boolean | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch:  {
    __typename: "Match",
    id: string,
    users:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    } | null >,
    encoding: string | null,
    mixedImage: string | null,
    matched: boolean | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      encoding: string | null,
      mixedImage: string | null,
      matched: boolean | null,
    },
    content: string,
    author:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      createdAt: string | null,
    },
    createdAt: string,
  } | null,
};
