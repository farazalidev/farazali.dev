import type { HTMLAttributes } from 'react';
import React from 'react';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className='w-full'>{children}</div>;
};
export default Layout;
