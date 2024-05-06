import type { HTMLAttributes } from 'react';

interface LinkButtonProps extends HTMLAttributes<HTMLAnchorElement> {}

export const LinkButton: React.FC<LinkButtonProps> = ({ children, ...props }) => {
    return <a {...props}>{children}</a>;
};
