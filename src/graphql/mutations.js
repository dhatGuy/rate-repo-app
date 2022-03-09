import { gql } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation ($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
    }
  }
`;

export const CREATE_REVIEW_MUTATION = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      rating
      text
      repository {
        id
      }
    }
  }
`;
