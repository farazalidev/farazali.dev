'use client';
import { useEffect, useRef, type HTMLAttributes } from 'react';

interface MarkdownHeadingProps extends HTMLAttributes<HTMLDivElement> {
    elementType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type HeadingElRef = HTMLHeadElement | null;

export const MarkdownHeading: React.FC<MarkdownHeadingProps> = ({ ...props }) => {
    const sectionsRef = useRef<HeadingElRef[]>([]);

    useEffect(() => {
        const section = sectionsRef.current;

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    history.replaceState(null, '', `#${sectionId}`);
                }
            });
        }, options);

        section.forEach((item) => {
            observer.observe(item as Element);
        });

        return () => {
            section.forEach((item) => {
                observer.unobserve(item as Element);
            });
        };
    }, []);

    return (
        <props.elementType className='prose toc-heading' id={`${props.children as string[][0]}`} ref={(el) => sectionsRef.current.push(el)}>
            {props.children}
        </props.elementType>
    );
};
