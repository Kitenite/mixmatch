/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name: string,
  rawImage?: string | null,
  alignedImage?: string | null,
  encoding?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  rawImage?: ModelStringInput | null,
  alignedImage?: ModelStringInput | null,
  encoding?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum MatchStatus {
  Unresolved = "Unresolved",
  Matched = "Matched",
  Rejected = "Rejected",
  Unmatched = "Unmatched",
}


export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  rawImage?: string | null,
  alignedImage?: string | null,
  encoding?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateMatchUserInput = {
  id?: string | null,
  createdAt?: string | null,
  liked?: UserMatchStatus | null,
  matchUserMatcherId: string,
  matchUserMatcheeId: string,
  matchUsersId?: string | null,
};

export enum UserMatchStatus {
  NotSeen = "NotSeen",
  Liked = "Liked",
  Disliked = "Disliked",
}


export type ModelMatchUserConditionInput = {
  createdAt?: ModelStringInput | null,
  liked?: ModelUserMatchStatusInput | null,
  and?: Array< ModelMatchUserConditionInput | null > | null,
  or?: Array< ModelMatchUserConditionInput | null > | null,
  not?: ModelMatchUserConditionInput | null,
};

export type ModelUserMatchStatusInput = {
  eq?: UserMatchStatus | null,
  ne?: UserMatchStatus | null,
};

export type UpdateMatchUserInput = {
  id: string,
  createdAt?: string | null,
  liked?: UserMatchStatus | null,
  matchUserMatcherId?: string | null,
  matchUserMatcheeId?: string | null,
  matchUsersId?: string | null,
};

export type DeleteMatchUserInput = {
  id?: string | null,
};

export type CreateMatchInput = {
  id?: string | null,
  encoding?: string | null,
  mixedImage?: string | null,
  matched: MatchStatus,
  userMatchesId?: string | null,
};

export type ModelMatchConditionInput = {
  encoding?: ModelStringInput | null,
  mixedImage?: ModelStringInput | null,
  matched?: ModelMatchStatusInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type ModelMatchStatusInput = {
  eq?: MatchStatus | null,
  ne?: MatchStatus | null,
};

export type UpdateMatchInput = {
  id: string,
  encoding?: string | null,
  mixedImage?: string | null,
  matched?: MatchStatus | null,
  userMatchesId?: string | null,
};

export type DeleteMatchInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  content: string,
  createdAt?: string | null,
  matchMessagesId?: string | null,
  messageMatchId: string,
  messageAuthorId: string,
  messageRecepientId: string,
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  content?: string | null,
  createdAt?: string | null,
  matchMessagesId?: string | null,
  messageMatchId?: string | null,
  messageAuthorId?: string | null,
  messageRecepientId?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  rawImage?: ModelStringInput | null,
  alignedImage?: ModelStringInput | null,
  encoding?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  encoding?: ModelStringInput | null,
  mixedImage?: ModelStringInput | null,
  matched?: ModelMatchStatusInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
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
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
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
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
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
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMatchUserMutationVariables = {
  input: CreateMatchUserInput,
  condition?: ModelMatchUserConditionInput | null,
};

export type CreateMatchUserMutation = {
  createMatchUser:  {
    __typename: "MatchUser",
    // Unmatched/Reported tbd.
    id: string,
    matcher:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    matchee:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string | null,
    liked: UserMatchStatus | null,
    updatedAt: string,
  } | null,
};

export type UpdateMatchUserMutationVariables = {
  input: UpdateMatchUserInput,
  condition?: ModelMatchUserConditionInput | null,
};

export type UpdateMatchUserMutation = {
  updateMatchUser:  {
    __typename: "MatchUser",
    // Unmatched/Reported tbd.
    id: string,
    matcher:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    matchee:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string | null,
    liked: UserMatchStatus | null,
    updatedAt: string,
  } | null,
};

export type DeleteMatchUserMutationVariables = {
  input: DeleteMatchUserInput,
  condition?: ModelMatchUserConditionInput | null,
};

export type DeleteMatchUserMutation = {
  deleteMatchUser:  {
    __typename: "MatchUser",
    // Unmatched/Reported tbd.
    id: string,
    matcher:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    matchee:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string | null,
    liked: UserMatchStatus | null,
    updatedAt: string,
  } | null,
};

export type CreateMatchMutationVariables = {
  input: CreateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type CreateMatchMutation = {
  createMatch:  {
    __typename: "Match",
    id: string,
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMatchMutationVariables = {
  input: UpdateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type UpdateMatchMutation = {
  updateMatch:  {
    __typename: "Match",
    id: string,
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMatchMutationVariables = {
  input: DeleteMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type DeleteMatchMutation = {
  deleteMatch:  {
    __typename: "Match",
    id: string,
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
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
    name: string,
    rawImage: string | null,
    alignedImage: string | null,
    encoding: string | null,
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMatchsQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchsQuery = {
  listMatchs:  {
    __typename: "ModelMatchConnection",
    items:  Array< {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      match:  {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
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
        createdAt: string,
        updatedAt: string,
      },
      recepient:  {
        __typename: "User",
        id: string,
        email: string,
        name: string,
        rawImage: string | null,
        alignedImage: string | null,
        encoding: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
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
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    matches:  {
      __typename: "ModelMatchConnection",
      items:  Array< {
        __typename: "Match",
        id: string,
        encoding: string | null,
        mixedImage: string | null,
        matched: MatchStatus,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchUserSubscription = {
  onCreateMatchUser:  {
    __typename: "MatchUser",
    // Unmatched/Reported tbd.
    id: string,
    matcher:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    matchee:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string | null,
    liked: UserMatchStatus | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchUserSubscription = {
  onUpdateMatchUser:  {
    __typename: "MatchUser",
    // Unmatched/Reported tbd.
    id: string,
    matcher:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    matchee:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string | null,
    liked: UserMatchStatus | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchUserSubscription = {
  onDeleteMatchUser:  {
    __typename: "MatchUser",
    // Unmatched/Reported tbd.
    id: string,
    matcher:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    matchee:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string | null,
    liked: UserMatchStatus | null,
    updatedAt: string,
  } | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch:  {
    __typename: "Match",
    id: string,
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch:  {
    __typename: "Match",
    id: string,
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch:  {
    __typename: "Match",
    id: string,
    users:  {
      __typename: "ModelMatchUserConnection",
      items:  Array< {
        __typename: "MatchUser",
        // Unmatched/Reported tbd.
        id: string,
        createdAt: string | null,
        liked: UserMatchStatus | null,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    encoding: string | null,
    mixedImage: string | null,
    matched: MatchStatus,
    messages:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    match:  {
      __typename: "Match",
      id: string,
      users:  {
        __typename: "ModelMatchUserConnection",
        nextToken: string | null,
      } | null,
      encoding: string | null,
      mixedImage: string | null,
      matched: MatchStatus,
      messages:  {
        __typename: "ModelMessageConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    recepient:  {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      rawImage: string | null,
      alignedImage: string | null,
      encoding: string | null,
      matches:  {
        __typename: "ModelMatchConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
