/* eslint-disable @typescript-eslint/no-unsafe-member-access -- u*/
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- u*/
// lib/google/client.ts

import { BetaAnalyticsDataClient } from '@google-analytics/data';

const credential = JSON.parse(Buffer.from(process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS || '', 'base64').toString());
export const analyticsDataClient = new BetaAnalyticsDataClient({
    projectId: credential.project_id,
    credentials: {
        client_email: credential.client_email,
        private_key: credential.private_key,
    },
});

export const GTAG = process.env.GTAG || '';
