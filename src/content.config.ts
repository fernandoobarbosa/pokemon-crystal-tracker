import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const badges = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/badges' }),
  schema: z.object({
    gym: z.string(),
    leader: z.string(),
    trainer_card: z.string(),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/timeline' }),
  schema: z.object({
    pokemon: z.string(),
    evolved_from: z.string().optional(),
    location: z.string(),
    after_badge: z.string(),
  }),
});

export const collections = { badges, timeline };
