import type { MetadataRoute } from 'next';
import groq from 'groq';
import type { SanityRecentPost } from '../lib/sanity/interface';
import { client } from '../lib/sanity/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const fetchRecentPosts = async (): Promise<Partial<SanityRecentPost>[]> => {
        const data: SanityRecentPost[] | undefined = await client.fetch(
            groq`*[_type=="post"] | order(_createdAt desc) {
                _id,
                title,
                summary,
                _createdAt,
                slug {
                current
                    },
                author -> { 
                name
                    },
                categories[]->{title},
                _updatedAt
}`,
        );
        return data || [];
    };

    const response = await fetchRecentPosts();

    const sitemapResponse: MetadataRoute.Sitemap = response.map((post) => {
        return {
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${encodeURIComponent(post.slug?.current || '')};${post._id}`,
            lastModified: post._updatedAt || '',
        };
    });
    return sitemapResponse;
}
