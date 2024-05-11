/* eslint-disable react/no-array-index-key -- want to use i as index*/
import type { ReactNode } from 'react';

export function getHighlightedText(text: string, highlight: string): ReactNode {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return highlight.length > 0 ? (
        <span>
            {parts.map((part, i) => (
                <span
                    key={i}
                    style={
                        part.toLowerCase() === highlight.toLowerCase()
                            ? { fontWeight: 'bold', backgroundColor: 'yellow', color: 'black', paddingLeft: '2px', paddingRight: '2px' }
                            : {}
                    }
                >
                    {part}
                </span>
            ))}{' '}
        </span>
    ) : (
        text
    );
}
