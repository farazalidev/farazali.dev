import './globals.css';
import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import LocalFont from 'next/font/local';
import { cn } from '@repo/ui/utils';

const Poppins = LocalFont({
    src: [
        {
            path: '../../public/fonts/poppins/Poppins-ExtraLight.ttf',
            weight: '100',
        },
        { path: '../../public/fonts/poppins/Poppins-Light.ttf', weight: '200' },
        { path: '../../public/fonts/poppins/Poppins-Medium.ttf', weight: '300' },
        { path: '../../public/fonts/poppins/Poppins-Regular.ttf', weight: '400' },
        { path: '../../public/fonts/poppins/Poppins-SemiBold.ttf', weight: '700' },
        { path: '../../public/fonts/poppins/Poppins-Bold.ttf', weight: '800' },
        { path: '../../public/fonts/poppins/Poppins-ExtraBold.ttf', weight: '900' },
    ],
});

export const metadata: Metadata = {
    title: 'farazali.dev',
    description: 'farazali portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang='en'>
            <body className={cn(Poppins.className, 'bg-main-bg relative container mx-auto my-3 md:my-5')}>{children}</body>
        </html>
    );
}
