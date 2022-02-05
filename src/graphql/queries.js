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
