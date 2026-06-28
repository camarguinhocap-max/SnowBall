import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
    return new NextResponse(
        'google.com, pub-1543510171277537, DIRECT, f08c47fec0942fa0\n',
        {
            status: 200,
            headers: {
                'Content-Type': 'text/plain',
                'Cache-Control': 'public, max-age=86400',
            },
        }
    );
}
