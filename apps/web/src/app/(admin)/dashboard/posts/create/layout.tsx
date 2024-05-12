import type { ReactNode } from 'react';
import React from 'react';

export default function layout({ children }: { children: ReactNode }): ReactNode {
    return <div>{children}</div>;
}
