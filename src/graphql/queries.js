import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
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

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
        }
        totalCount
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
          cursor
        }
      }
      userHasReviewed
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      createdAt
      reviews @include(if: $includeReviews) {
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
            repository {
              id
              name
            }
          }
        }
      }
      reviewCount
    }
  }
`;
