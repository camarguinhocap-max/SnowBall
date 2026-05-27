import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Dynamically import the specific post file to avoid bundling all posts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  try {
    // Import the post module dynamically based on slug
    const postModule = await import(`@/data/posts/${slug}.ts`);
    const post = postModule.post;
    const { title, category, excerpt } = post;
    const response = NextResponse.json({ title, category, excerpt });
    // Cache for 1 hour (3600s) on Vercel Edge
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate=60');
    return response;
  } catch (err) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
