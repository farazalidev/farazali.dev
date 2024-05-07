import { useCallback, useEffect, useState } from 'react';

interface UseDetectScrollInterface {
    height: number;
}

type UseDetectScrollType = (args: UseDetectScrollInterface) => { collide: boolean };

/**
 *
 * @param height -  height at what height to detect the collision
 * @returns ` { collide:boolean } `
 */
export const useDetectScroll: UseDetectScrollType = ({ height }) => {
    const [collide, setCollide] = useState(false);

    const Scroll = useCallback(() => {
        if (window.scrollY >= height) {
            setCollide(true);
        } else {
            setCollide(false);
        }
    }, [height]);

    useEffect(() => {
        window.addEventListener('scroll', Scroll);
        return () => {
            window.removeEventListener('scroll', Scroll);
        };
    }, [Scroll]);

    return { collide };
};
