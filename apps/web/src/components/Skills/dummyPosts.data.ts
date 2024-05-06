interface Post {
    date: string;
    title: string;
    body: string;
    tags: string[];
}

export const postsData: Post[] = [
    {
        title: 'Minim exercitation esse Lorem tempor dolor dolore est cupidatat dolor eu.',
        body: 'Aliquip aliquip eiusmod Lorem cillum officia tempor dolore eiusmod commodo excepteur. Commodo et mollit laboris sint dolore irure dolore id. Sit cupidatat ex Lorem sint consequat fugiat. Eu ex et nulla mollit velit qui aliquip aliqua irure fugiat.',
        date: new Date(Date.now()).toString(),
        tags: ['react', 'typescript', 'nextjs'],
    },
    {
        title: 'Minim exercitation esse Lorem tempor dolor dolore est cupidatat dolor eu.',
        body: 'Aliquip aliquip eiusmod Lorem cillum officia tempor dolore eiusmod commodo excepteur. Commodo et mollit laboris sint dolore irure dolore id. Sit cupidatat ex Lorem sint consequat fugiat. Eu ex et nulla mollit velit qui aliquip aliqua irure fugiat.',
        date: new Date(Date.now()).toString(),
        tags: ['react', 'typescript', 'nextjs'],
    },
];
