interface ProjectData {
    name: string;
    link: string;
    thumbnail: string;
    type: string;
}

export const projectsData: ProjectData[] = [
    {
        name: 'UPrides (Ride Hailing Application)',
        link: 'https://uprides.eu',
        thumbnail: '/uprides-cover.jpg',
        type: 'Mobile Apps (Node.js)',
    },
    {
        name: 'Dex Remit (Money transfer)',
        thumbnail: '/dex-remit.png',
        type: 'Web App (React.js)',
        link: 'https://dexremit.com',
    },
    {
        name: 'Cricap (Sports News)',
        link: 'https://web.cricap.com',
        thumbnail: '/cricap.png',
        type: 'Web App (Next.js)',
    },
    {
        name: 'Whatsapp Web Clone (Personal)',
        link: 'https://github.com/farazalidev/whatsapp-clone',
        thumbnail: '/whatsapp-web-clone_screen_shot.png',
        type: 'Web App (Next.js, Nest.js)',
    },
];
