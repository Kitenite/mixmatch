/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $id: ID
    $email: AWSEmail
    $firstName: String
    $lastName: String
    $rawImage: AWSURL
  ) {
    onCreateUser(
      id: $id
      email: $email
      firstName: $firstName
      lastName: $lastName
      rawImage: $rawImage
    ) {
      id
      email
      firstName
      lastName
      rawImage
      alignedImage
      encoding
      matches
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $id: ID
    $email: AWSEmail
    $firstName: String
    $lastName: String
    $rawImage: AWSURL
  ) {
    onUpdateUser(
      id: $id
      email: $email
      firstName: $firstName
      lastName: $lastName
      rawImage: $rawImage
    ) {
      id
      email
      firstName
      lastName
      rawImage
      alignedImage
      encoding
      matches
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $id: ID
    $email: AWSEmail
    $firstName: String
    $lastName: String
    $rawImage: AWSURL
  ) {
    onDeleteUser(
      id: $id
      email: $email
      firstName: $firstName
      lastName: $lastName
      rawImage: $rawImage
    ) {
      id
      email
      firstName
      lastName
      rawImage
      alignedImage
      encoding
      matches
    }
  }
`;
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch(
    $id: ID
    $users: [ID]
    $encoding: AWSURL
    $mixedImage: AWSURL
    $matched: Boolean
  ) {
    onCreateMatch(
      id: $id
      users: $users
      encoding: $encoding
      mixedImage: $mixedImage
      matched: $matched
    ) {
      id
      users
      encoding
      mixedImage
      matched
    }
  }
`;
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch(
    $id: ID
    $users: [ID]
    $encoding: AWSURL
    $mixedImage: AWSURL
    $matched: Boolean
  ) {
    onUpdateMatch(
      id: $id
      users: $users
      encoding: $encoding
      mixedImage: $mixedImage
      matched: $matched
    ) {
      id
      users
      encoding
      mixedImage
      matched
    }
  }
`;
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch(
    $id: ID
    $users: [ID]
    $encoding: AWSURL
    $mixedImage: AWSURL
    $matched: Boolean
  ) {
    onDeleteMatch(
      id: $id
      users: $users
      encoding: $encoding
      mixedImage: $mixedImage
      matched: $matched
    ) {
      id
      users
      encoding
      mixedImage
      matched
    }
  }
`;
