/* eslint-disable @typescript-eslint/no-unsafe-call -- unknown values */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- unknown values */
/* eslint-disable @typescript-eslint/no-explicit-any -- unknown values*/
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<any>> {
    const response = await fetch('https://api.github.com/users/farazalidev/repos?sort=stars&direction=asc', {
        method: 'GET',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- no required always
        headers: { auth: process.env.GITHUB_TOKEN as any },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- i don't response schema
    const data = (await response.json()) || [];
    return NextResponse.json(data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count));
}
