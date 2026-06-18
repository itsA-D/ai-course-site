import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema({
    extend: z.object({
      track: z.enum(['foundation', 'research', 'management']).optional(),
      module: z.string().optional(),
      order: z.number().optional(),
    }),
  }),
});

export const collections = { docs };
