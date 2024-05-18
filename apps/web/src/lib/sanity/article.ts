/* eslint-disable @typescript-eslint/no-explicit-any -- want to use any */
export interface Author {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    bio: string;
    image: ImageReference;
    name: string;
    slug: Slug;
    profession: string;
}

export interface Block {
    _key: string;
    _type: string;
    children: Span[];
    markDefs: any[];
    style: string;
}

export interface Span {
    _key: string;
    _type: string;
    marks: any[];
    text: string;
}

export interface ImageAsset {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    assetId: string;
    asset: {
        url: string;
        metadata: {
            dimensions: {
                height: number;
                width: number;
            };
        };
    };
    extension: string;
    metadata: ImageMetadata;
    mimeType: string;
    originalFilename: string;
    path: string;
    sha1hash: string;
    size: number;
    uploadId: string;
    url: string;
}

export interface ImageMetadata {
    _type: string;
    blurHash: string;
    dimensions: ImageDimensions;
    dominant: ImagePaletteSwatch;
    hasAlpha: boolean;
    isOpaque: boolean;
    lqip: string;
    palette: ImagePalette;
}

export interface ImageDimensions {
    _type: string;
    aspectRatio: number;
    height: number;
    width: number;
}

export interface ImagePalette {
    _type: string;
    darkMuted: ImagePaletteSwatch;
    darkVibrant: ImagePaletteSwatch;
    dominant: ImagePaletteSwatch;
    lightMuted: ImagePaletteSwatch;
    lightVibrant: ImagePaletteSwatch;
    muted: ImagePaletteSwatch;
    vibrant: ImagePaletteSwatch;
}

export interface ImagePaletteSwatch {
    background: string;
    foreground: string;
    population: number;
    title: string;
    _type: string;
}

export interface ImageReference {
    _ref: string;
    _type: string;
    asset: {
        url: string;
    };
}

export interface Slug {
    _createdAt: string;
    _id: string;
    _type: string;
    current: string;
}

export interface Category {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    title: string;
}

export interface Article {
    author: Author;
    categories: Category[];
    mainImage: ImageAsset;
    publishedAt: string;
    title: string;
    md: string;
}
