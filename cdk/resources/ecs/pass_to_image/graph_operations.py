# Helpers
import json
import os
# AWS
from boto3 import Session as AWSSession
from requests_aws4auth import AWS4Auth
# Graph
from gql import gql
from gql.client import Client
from gql.transport.requests import RequestsHTTPTransport

# Const
APPSYNC_ENDPOINT = 'https://spqnnxbnyza2pl3tzpwagy5t7q.appsync-api.us-east-1.amazonaws.com/graphql'

# GraphQL queries and mutations
get_user_query = """
  query GetUser($input:ID!){
    getUser(id: $input) {
      encoding
      id
      matches {
        items {
          matchID
        }
      }
    }
  }
"""
list_users_filtered_query = """
  query GetUsersAndMatches($input:ModelUserFilterInput) {
    listUsers(limit: 10, filter: $input) {
      items {
        id
        matches {
          items {
            matchID
          }
        }
        encoding
      }
    }
  }
"""
create_match_mutation = """
  mutation CreateMatch($input: CreateMatchInput!) {
    createMatch(input: $input) {
        id
    }
  }
"""
create_link_mutation = """
  mutation CreateLinks($input:CreateMatchUserInput!) {
    createMatchUser(input: $input) {
        id
    }
  }
"""

def make_client():
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    aws = AWSSession(aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),
                     aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),
                     region_name=os.getenv('AWS_REGION_NAME'))
    credentials = aws.get_credentials().get_frozen_credentials()

    auth = AWS4Auth(
        credentials.access_key,
        credentials.secret_key,
        aws.region_name,
        'appsync',
        session_token=credentials.token,
    )

    # transport = RequestsHTTPTransport(url=os.getenv('APPSYNC_ENDPOINT'), headers=headers, auth=auth)
    transport = RequestsHTTPTransport(url=APPSYNC_ENDPOINT, headers=headers, auth=auth)
    client = Client(transport=transport, fetch_schema_from_transport=True)
    return client

def get_user(userID):
  client = make_client()
  params = userID
  resp = client.execute(gql(get_user_query), variable_values=json.dumps({'input': params}))
  return resp['getUser']

def list_users_filtered(userID):
  # Filter for users with encoding and not the same ID
  client = make_client()
  filter = {
    'encoding': {
      'attributeType': 'string'
      }, 
    'id': {'ne': userID}
    }
  resp = client.execute(gql(list_users_filtered_query), variable_values=json.dumps({'input': filter}))
  return resp['listUsers']['items']

def create_match(matchID, userID1, userID2, mixedImage):
    client = make_client()
    params = {
      'id': matchID,
      'matched': 'Unresolved',
      'mixedImage': mixedImage
    }
    resp = client.execute(gql(create_match_mutation), variable_values=json.dumps({'input': params}))
    matchID = resp['createMatch']['id']
    # Need to create 2 way link
    create_link(matchID, userID1, userID2)
    create_link(matchID, userID2, userID1)
    return matchID
    
def create_link(matchID, sourceUserID, targetUserID):
    client = make_client()
    params = {
        'matchID': matchID, 
        'matchStatus': 'NotSeen', 
        'sourceUserID': sourceUserID, 
        'targetUserID': targetUserID
    }
    resp = client.execute(gql(create_link_mutation), variable_values=json.dumps({'input': params}))
    return resp['createMatchUser']

# print(get_user("103c33c1-dce1-4819-95ed-107dd5b0adb2"))
# print(list_users_filtered("103c33c1-dce1-4819-95ed-107dd5b0adb2"))
# print(create_match("103c33c1-dce1-4819-95ed-107dd5b0adb2", "118d4a2f-f3ff-4a6f-9d7b-713f3ffeb033", "fakeMixedImageKey"))
