/* eslint-disable no-useless-escape -- u*/
/* eslint-disable prefer-named-capture-group -- u */
interface UrlLocation {
    href: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
}

export function getLocation(href: string): UrlLocation | null {
    const match = /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/.exec(href);
    return (
        match && {
            href,
            protocol: match[1],
            host: match[2],
            hostname: match[3],
            port: match[4],
            pathname: match[5],
            search: match[6],
            hash: match[7],
        }
    );
}
