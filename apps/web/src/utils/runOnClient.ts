/* eslint-disable @typescript-eslint/no-explicit-any -- can be any thing to return*/
export const runOnClient = (func: () => any): void => {
    if (typeof window !== 'undefined') {
        if (window.document.readyState === 'loading') {
            window.addEventListener('load', func);
        } else {
            func();
        }
    }
};
