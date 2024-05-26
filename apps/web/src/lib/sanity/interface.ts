export interface SanityPostAuthor {
    name: string;
}
export interface SanityPostCategory {
    title: string;
}

export interface SanityPostSlug {
    current: string;
}

export interface SanityRecentPost {
    _id: string;
    title: string;
    summary: string;
    author: SanityPostAuthor;
    slug: SanityPostSlug;
    _createdAt: string;
    categories: SanityPostCategory[];
    _updatedAt: string;
}
