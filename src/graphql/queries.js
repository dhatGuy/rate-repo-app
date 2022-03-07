import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      totalCount
      edges {
        cursor
        node {
          id
          createdAt
          ownerName
          name
          fullName
          reviewCount
          ratingAverage
          stargazersCount
          ownerAvatarUrl
          description
          language
          forksCount
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      ownerName
      name
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      url
      ownerAvatarUrl
      description
      language
      reviews {
        edges {
          node {
            id
            userId
            repositoryId
            rating
            createdAt
            text
            user {
              id
              username
            }
          }
        }
      }
      userHasReviewed
    }
  }
`;
