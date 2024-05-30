/* eslint-disable react/self-closing-comp -- added google analytics scripts*/
import './globals.css';
import '@repo/ui/styles.css';
import LocalFont from 'next/font/local';
import { cn } from '@repo/ui/utils';
import Script from 'next/script';
import type { HTMLAttributes } from 'react';

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

interface CommonLayoutProps extends HTMLAttributes<HTMLBodyElement> {}

export default function CommonLayout({ children, className, ...props }: CommonLayoutProps): JSX.Element {
    return (
        <html lang='en'>
            <meta content='ufh7qXb8UNlyYJ43qBcYsHYMRVSe_H5_qvYyTvJy3zU' name='google-site-verification' />
            <head>
                <meta content='3D7A2B994E605A227CE245DBF806CF3F' name='msvalidate.01' />
                <Script async src='https://www.googletagmanager.com/gtag/js?id=G-NEJDNP6XCW'></Script>
                <Script id=''>
                    {` window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-NEJDNP6XCW');`}
                </Script>
            </head>
            <body className={cn(Poppins.className, 'bg-main-bg container mx-auto my-3 md:my-5 flex flex-col', className)} {...props}>
                {children}
            </body>
        </html>
    );
}
