import React from 'react';
import groq from 'groq';
import { Post } from '@components';
import type { Article } from '../../../../lib/sanity/article';
import { client } from '../../../../lib/sanity/client';
import { BlogPostSideBar } from '../../../../components/Blog/BlogPostSideBar';

interface PageProps {
    params: {
        slug: string;
    };
    searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ params }: PageProps): Promise<React.JSX.Element> {
    const fetchPost = async (currentSlug: string): Promise<Article[]> => {
        const response: Article[] = await client.fetch(groq`*[slug.current=="${currentSlug}" && _type=="post" ]{
      title,
       author-> {
        name,
        image {
        asset->
          },
        bio,
        profession
      },
      mainImage {
        asset->},
      slug->,
      md,
      publishedAt,
      categories[]->
    } `);

        return response;
    };

    const article = await fetchPost(decodeURIComponent(params.slug));

    return (
        <div className='grid grid-cols-12 gap-4'>
            <Post article={article[0]} className='col-span-12 xl:col-span-8' />
            <BlogPostSideBar article={article[0]} className='hidden xl:flex xl:col-span-4 h-fit' />
        </div>
    );
}
