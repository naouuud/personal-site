// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const CVCollection = defineCollection({
  type: "data", // for MD, "data" for JSON and YAML
  schema: z.object({
    position: z.string(),
    employer: z.string(),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z.string().transform((str) => new Date(str)),
    location: z.string(),
    details: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  cv: CVCollection,
};
