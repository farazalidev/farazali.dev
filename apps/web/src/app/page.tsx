import React from 'react';
import { Footer, GitHubReps, Header, Hero, Projects, RecentPosts, Skills } from '@components';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <main>
            <div className='flex flex-col gap-4'>
                <Header />
                <Hero />
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <Skills className='md:col-span-2' />
                    <RecentPosts className='md:col-span-2 xl:col-span-1 xl:row-span-2' />
                    <GitHubReps />
                    <Projects />
                </div>
                <Footer />
            </div>
        </main>
    );
};
export default MainPage;
