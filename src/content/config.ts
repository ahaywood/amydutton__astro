// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.date(),
    origin: z.enum(['hashnode', 'medium', 'devto', 'twitch', 'youtube', 'tiktok', 'twitter', 'podcast', 'post']),
    type: z.enum(['video', 'article', 'stream', 'podcast', 'atomic essay']),
    link: z.string().optional(),
    canonicalUrl: z.string().optional(),
  }),
});

const courseCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    link: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const pastTalkCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    location: z.string(),
    link: z.string(),
    logo: z.string(),
    embed: z.string(),
    order: z.number()
  })
})

const resumeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    companyLink: z.string().optional(),
    dates: z.string(),
    order: z.number()
  })
})

const upcomingEventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    eventLink: z.string(),
    eventDate: z.string(),
    location: z.string(),
  })
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'courses': courseCollection,
  'pastTalks': pastTalkCollection,
  'upcomingEvents': upcomingEventsCollection,
};