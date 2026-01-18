// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";
var posts = defineCollection({
  name: "posts",
  directory: "./src/data",
  include: "*.md",
  schema: z.object({
    title: z.string(),
    content: z.string()
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
