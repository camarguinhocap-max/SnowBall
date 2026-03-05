import { ImageResponse } from 'next/og';
import { posts } from '@/data/posts';

// O Next.js usará isso como o tamanho oficial das imagens para redes sociais.
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = posts.find((p) => p.slug === resolvedParams.slug);

    // Fallback seguro caso algo dê errado ou o post não seja achado
    const title = post ? post.title : 'Artigos e Dicas Financeiras';
    const category = post ? post.category : 'Blog DividAI';

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    backgroundColor: '#0f172a',
                    backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
                    padding: '80px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div
                        style={{
                            padding: '10px 24px',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            borderRadius: '100px',
                            border: '2px solid rgba(56, 189, 248, 0.3)',
                            color: '#38bdf8',
                            fontSize: 28,
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {category}
                    </div>
                    <div
                        style={{
                            fontSize: 68,
                            fontWeight: 800,
                            color: 'white',
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                            marginTop: '20px',
                            maxWidth: '950px'
                        }}
                    >
                        {title}
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingTop: '40px',
                        borderTop: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                backgroundColor: '#38bdf8',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontSize: 32,
                                fontWeight: 900
                            }}
                        >
                            D
                        </div>
                        <div style={{ fontSize: 36, color: '#f8fafc', fontWeight: 700 }}>
                            DividAI
                        </div>
                    </div>
                    <div style={{ fontSize: 32, color: '#94a3b8', fontWeight: 500 }}>
                        blog.dividai.com
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
