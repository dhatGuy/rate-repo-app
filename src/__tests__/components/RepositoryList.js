import { render, within } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";
import { formatCounts } from "../../utils/formatCounts";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      // Add your test code here
      const { debug, getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      const repositoryItems = getAllByTestId("repositoryItem");
      debug();
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      expect(firstRepositoryItem).toHaveTextContent("jaredpalmer/formik");
      expect(secondRepositoryItem).toHaveTextContent(
        "async-library/react-async"
      );

      expect(within(firstRepositoryItem).getByText("TypeScript")).toBeTruthy();
      expect(within(secondRepositoryItem).getByText("JavaScript")).toBeTruthy();

      expect(
        within(firstRepositoryItem).getByText(
          "Build forms in React, without the tears"
        )
      ).toBeTruthy();
      expect(
        within(secondRepositoryItem).getByText(
          "Flexible promise-based React data loader"
        )
      ).toBeTruthy();

      expect(
        within(firstRepositoryItem).getByText(formatCounts(1619))
      ).toBeTruthy();
      expect(within(secondRepositoryItem).getByText("69")).toBeTruthy();

      expect(
        within(firstRepositoryItem).getByText(formatCounts(21856))
      ).toBeTruthy();
      expect(
        within(secondRepositoryItem).getByText(formatCounts(1760))
      ).toBeTruthy();

      expect(within(firstRepositoryItem).getByText("88")).toBeTruthy();
      expect(within(secondRepositoryItem).getByText("72")).toBeTruthy();

      expect(repositoryItems.length).toBe(2);
    });
  });
});
