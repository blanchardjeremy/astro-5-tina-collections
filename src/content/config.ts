import { defineCollection, z } from "astro:content";
import type { PostQuery, PostQueryVariables, SystemInfo } from "tina/__generated__/types";
import client from "tina/__generated__/client";
import type { LoaderContext } from "astro/loaders";

// in Tina the name is singular "post". Sorry
// If you would like to refactor it please do
const postsCollection = defineCollection({
  // type: "content",
  loader: async (context: LoaderContext) => {
    const postsResponse = await client.queries.postConnection()

    // TODO: Get all pages.
    return postsResponse.data.postConnection.edges
    ?.filter((post) => !!post)
    .map((post) => {
      return {
        ...post?.node,
        id: post?.node?.id,
        tinaInfo: post.node?._sys
      };
    })
  },
  schema: z.object({
    tinaInfo: z.object({
      filename: z.string(),
      basename: z.string(),
      path: z.string(),
      relativePath: z.string(),
    }),
    title: z.string(),
    description: z.string(),
    slug: z.string().nullish(),
    date: z.coerce.date(),
    categories: z.array(z.string()).nullish(),
    tags: z.array(z.string()).nullish(),
  })
})

export const collections = {
  'posts': postsCollection
}
