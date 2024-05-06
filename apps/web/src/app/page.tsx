import React from 'react';
import { Footer, GitHubReps, Header, Hero, Projects } from '@components';
import { BlogPosts } from '../components/BlogPosts/BlogPosts';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <main>
            <div className='flex flex-col gap-4'>
                <Header />
                <Hero />
                <div className='flex flex-col gap-4 md:flex-none md:grid md:grid-cols-3'>
                    <GitHubReps />
                    <BlogPosts />
                    <Projects />
                </div>
                <Footer />
            </div>
        </main>
    );
};
export default MainPage;
