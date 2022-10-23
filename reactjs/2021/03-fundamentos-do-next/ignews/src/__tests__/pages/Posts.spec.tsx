import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import Posts, { getStaticProps } from "../../pages/posts";
import { getPrismicClient } from "../../services/prismic";

const posts = [
  {
    slug: "my-new-post",
    title: "My new Post",
    excerpt: "Post excerpt",
    updatedAt: "October, 23",
  },
];

jest.mock("../../services/prismic");
describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My new Post")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValue({
      get: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "my-new-post",
            data: {
              title: [
                {
                  type: "heading",
                  text: "My new post",
                },
              ],
              content: [
                {
                  type: "paragraph",
                  text: "Post excerpt",
                },
              ],
            },
            last_publication_date: "10-23-2022",
          },
        ],
      }),
    } as any);
    const response = await getStaticProps({});

    expect(response).toEqual(
      // Verifica se o objeto contém
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: "my-new-post",
              title: "My new post",
              excerpt: "Post excerpt",
              updatedAt: "23 de outubro de 2022",
            },
          ],
        },
      })
    );
  });
});

