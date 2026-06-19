export const runtime = 'edge';

export async function GET() {
  return new Response(
    'google.com, pub-1543510171277537, DIRECT, f08c47fec0942fa0',
    {
      headers: { 'Content-Type': 'text/plain' },
    }
  );
}
