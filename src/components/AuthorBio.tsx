import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
    return (
        <div className="author-bio-container">
            <div className="author-bio-indicator" />

            <Link href="/autor/lucas-bianchi" className="author-bio-image-link">
                <Image
                    src="/lucas-bianchi.png"
                    alt="Lucas Bianchi - Editor Chefe DividAI"
                    width={100}
                    height={100}
                    className="author-bio-image"
                />
            </Link>

            <div className="author-bio-content">
                <div className="author-bio-header">
                    <Link href="/autor/lucas-bianchi" className="author-bio-name-link">
                        <h3 className="author-bio-name">
                            Lucas Bianchi
                        </h3>
                    </Link>
                    <span className="author-bio-role">
                        Editor-chefe
                    </span>
                </div>
                <p className="author-bio-description">
                    Analista financeiro especialista em renda passiva e dividendos. Dedicado a ajudar investidores brasileiros a alcançarem a liberdade financeira com foco em estratégias sólidas de Value Investing e educação prática.
                </p>
                <div className="author-bio-links">
                    <Link href="/autor/lucas-bianchi" className="author-bio-link">
                        Ver perfil completo →
                    </Link>
                    <a href="https://twitter.com/dividai" target="_blank" rel="noopener noreferrer" className="author-bio-link">
                        X (Twitter)
                    </a>
                    <a href="https://t.me/DividAI_News" target="_blank" rel="noopener noreferrer" className="author-bio-link">
                        Telegram
                    </a>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .author-bio-container {
                    background-color: var(--card-bg);
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    padding: 2rem;
                    margin-top: 3rem;
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    box-shadow: var(--shadow-card);
                    position: relative;
                    overflow: hidden;
                }
                .author-bio-indicator {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 100%;
                    background-color: var(--primary);
                }
                .author-bio-image-link {
                    flex-shrink: 0;
                }
                .author-bio-image {
                    border-radius: 20px;
                    object-fit: cover;
                    border: 1px solid var(--border);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                    display: block;
                }
                .author-bio-content {
                    flex: 1;
                }
                .author-bio-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.5rem;
                }
                .author-bio-name-link {
                    text-decoration: none;
                    color: inherit;
                }
                .author-bio-name {
                    margin: 0;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--foreground);
                }
                .author-bio-role {
                    font-size: 0.75rem;
                    background-color: rgba(2, 132, 199, 0.1);
                    color: var(--primary);
                    padding: 0.2rem 0.6rem;
                    border-radius: 20px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .author-bio-description {
                    margin: 0;
                    font-size: 0.95rem;
                    color: var(--foreground-2);
                    line-height: 1.6;
                }
                .author-bio-links {
                    margin-top: 1rem;
                    display: flex;
                    gap: 1.25rem;
                    font-size: 0.9rem;
                    flex-wrap: wrap;
                }
                .author-bio-link {
                    color: var(--primary);
                    text-decoration: none;
                    font-weight: 600;
                }

                @media (max-width: 600px) {
                    .author-bio-container {
                        flex-direction: column;
                        text-align: center;
                        gap: 1.5rem;
                        padding: 1.5rem;
                    }
                    .author-bio-header {
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                    .author-bio-links {
                        justify-content: center;
                    }
                }
                `
            }} />
        </div>
    );
}
