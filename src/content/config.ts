import { defineCollection, z } from 'astro:content';

const episodesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Episode metadata
    title: z.string(),
    publishedDate: z.date(),
    updatedDate: z.date().optional(),
    
    // Status
    status: z.enum(['published', 'draft', 'coming-soon']),
    
    // Guest information
    guest: z.object({
      name: z.string(),
      company: z.string(),
      role: z.string(),
      linkedin: z.string().url().optional(),
      avatar: z.string().url().optional(),
    }),
    
    // Video information
    youtube: z.string().url(),
    thumbnail: z.string().url(),
    duration: z.string().optional(),
    
    // Content categorization
    category: z.string(),
    tags: z.array(z.string()),
    
    // SEO
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    
    // Content summary
    summary: z.string(),
    keyInsights: z.array(z.string()).optional(),
    limitations: z.array(z.string()).optional(),
    learnings: z.array(z.string()).optional(),
    
    // Project details
    projectDetails: z.object({
      challenge: z.string(),
      solution: z.string(),
      results: z.array(z.string()),
    }).optional(),
    
    // Language
    lang: z.enum(['fr', 'en']),
  }),
});

export const collections = {
  episodes: episodesCollection,
};