import React from 'react';
import groq from 'groq';
import type { Metadata } from 'next';
import { Post } from '@components';
import type { Article } from '../../../../lib/sanity/article';
import { client } from '../../../../lib/sanity/client';
import { BlogPostSideBar } from '../../../../components/Blog/BlogPostSideBar';
import type { SanityRecentPost } from '../../../../lib/sanity/interface';

interface PageProps {
    params: {
        slug: string;
    };
    searchParams: Record<string, string | string[] | undefined>;
}

const fetchPost = async (currentSlug: string) => {
    const _id = decodeURIComponent(currentSlug).split(';')[1]?.slice(0, 36);
    const response: Article[] = await client.fetch(
        groq`*[_id=="${_id}" && _type=="post" ]{
            title,
                author-> {
                    name,
                    image {
                    asset->
                          },
                    bio,
                    profession
                },
                summary,
                mainImage {
                    asset->
                    },
                slug->,
                md,
                publishedAt,
                categories[]->
    }`,
        { _id },
        { cache: 'force-cache' },
    );

    return response;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const response = await fetchPost(decodeURIComponent(params.slug));

    return {
        title: response[0]?.title,
        description: response[0]?.summary,
        authors: [{ name: response[0]?.author.name }],
        category: response[0]?.categories?.[0]?.title,
        openGraph: {
            images: [
                {
                    url: response[0].mainImage.asset.url,
                },
            ],
            type: 'article',
        },
        keywords: [...(response[0].categories?.map((cat) => cat.title) || [])],
        robots: 'index, follow',
    };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts: SanityRecentPost[] = await client.fetch(groq`*[_type=="post"]`);
    return posts.map(({ slug, _id }) => ({ slug: `${slug.current};${_id}` }));
}

export default async function Page({ params }: PageProps): Promise<React.JSX.Element> {
    const article = await fetchPost(decodeURIComponent(params.slug));

    return (
        <div className='grid grid-cols-12 gap-4'>
            <Post article={article[0]} className='col-span-12 xl:col-span-8' />
            <BlogPostSideBar article={article[0]} className='hidden xl:flex xl:col-span-4 h-fit' />
        </div>
    );
}
