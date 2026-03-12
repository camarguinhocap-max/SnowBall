'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simular envio de email (em produção, integrar com serviço de email)
            // Por enquanto, apenas validar e mostrar mensagem de sucesso
            if (formData.name && formData.email && formData.message) {
                // Aqui você poderia integrar com um serviço como:
                // - SendGrid
                // - Resend
                // - EmailJS
                // - Sua própria API

                console.log('Dados do formulário:', formData);
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Limpar mensagem de sucesso após 5 segundos
                setTimeout(() => setSubmitted(false), 5000);
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <article style={{ maxWidth: "900px", margin: "4rem auto 4rem auto" }}>
            <header className="article-header">
                <h1 className="article-title">Entre em Contato</h1>
                <p style={{ fontSize: "1.1rem", color: "var(--muted)", marginTop: "1rem" }}>
                    Tem alguma pergunta ou sugestão? Nos contacte através do formulário abaixo ou por um dos nossos canais.
                </p>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", marginTop: "3rem" }}>
                {/* Formulário */}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {submitted && (
                        <div style={{
                            padding: "1rem",
                            backgroundColor: "rgba(34, 197, 94, 0.1)",
                            border: "1px solid rgba(34, 197, 94, 0.3)",
                            borderRadius: "8px",
                            color: "var(--primary)",
                            fontSize: "0.95rem"
                        }}>
                            ✓ Obrigado! Sua mensagem foi recebida. Responderemos em breve.
                        </div>
                    )}

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label htmlFor="name" style={{ fontWeight: "500" }}>Nome *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "0.8rem",
                                border: "1px solid var(--border)",
                                borderRadius: "6px",
                                backgroundColor: "var(--bg)",
                                color: "var(--text)",
                                fontSize: "1rem",
                                fontFamily: "inherit"
                            }}
                            placeholder="Seu nome completo"
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label htmlFor="email" style={{ fontWeight: "500" }}>Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                padding: "0.8rem",
                                border: "1px solid var(--border)",
                                borderRadius: "6px",
                                backgroundColor: "var(--bg)",
                                color: "var(--text)",
                                fontSize: "1rem",
                                fontFamily: "inherit"
                            }}
                            placeholder="seu.email@exemplo.com"
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label htmlFor="subject" style={{ fontWeight: "500" }}>Assunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            style={{
                                padding: "0.8rem",
                                border: "1px solid var(--border)",
                                borderRadius: "6px",
                                backgroundColor: "var(--bg)",
                                color: "var(--text)",
                                fontSize: "1rem",
                                fontFamily: "inherit"
                            }}
                            placeholder="Assunto da mensagem"
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label htmlFor="message" style={{ fontWeight: "500" }}>Mensagem *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            style={{
                                padding: "0.8rem",
                                border: "1px solid var(--border)",
                                borderRadius: "6px",
                                backgroundColor: "var(--bg)",
                                color: "var(--text)",
                                fontSize: "1rem",
                                fontFamily: "inherit",
                                resize: "vertical"
                            }}
                            placeholder="Sua mensagem..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            padding: "0.8rem 1.5rem",
                            backgroundColor: "var(--primary)",
                            color: "white",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "1rem",
                            fontWeight: "500",
                            cursor: loading ? "not-allowed" : "pointer",
                            opacity: loading ? 0.6 : 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = "var(--primary-dark)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--primary)")}
                    >
                        <Send size={18} />
                        {loading ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                </form>

                {/* Informações de Contato */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div style={{
                        padding: "1.5rem",
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                        border: "1px solid rgba(14, 165, 233, 0.2)",
                        borderRadius: "8px"
                    }}>
                        <h3 style={{ marginTop: 0, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <Mail size={20} style={{ color: "var(--primary)" }} />
                            Email
                        </h3>
                        <p style={{ margin: "0.5rem 0 0 0" }}>
                            <a href="mailto:contato@dividai.com" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                                contato@dividai.com
                            </a>
                        </p>
                        <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.9rem", color: "var(--muted)" }}>
                            Responderemos em até 24 horas
                        </p>
                    </div>

                    <div style={{
                        padding: "1.5rem",
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                        border: "1px solid rgba(14, 165, 233, 0.2)",
                        borderRadius: "8px"
                    }}>
                        <h3 style={{ marginTop: 0, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <Phone size={20} style={{ color: "var(--primary)" }} />
                            Redes Sociais
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <p style={{ margin: 0 }}>
                                <a href="https://t.me/dividai_news" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                                    Telegram: @dividai_news
                                </a>
                            </p>
                            <p style={{ margin: 0 }}>
                                <a href="https://twitter.com/dividai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", textDecoration: "underline" }}>
                                    Twitter: @dividai
                                </a>
                            </p>
                        </div>
                    </div>

                    <div style={{
                        padding: "1.5rem",
                        backgroundColor: "rgba(14, 165, 233, 0.1)",
                        border: "1px solid rgba(14, 165, 233, 0.2)",
                        borderRadius: "8px"
                    }}>
                        <h3 style={{ marginTop: 0, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <MapPin size={20} style={{ color: "var(--primary)" }} />
                            Informações
                        </h3>
                        <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.6" }}>
                            <strong>DividAI</strong><br />
                            Blog de Educação Financeira<br />
                            Brasil
                        </p>
                    </div>

                    <div style={{
                        padding: "1.5rem",
                        backgroundColor: "rgba(251, 191, 36, 0.1)",
                        border: "1px solid rgba(251, 191, 36, 0.3)",
                        borderRadius: "8px"
                    }}>
                        <p style={{ margin: 0, fontSize: "0.9rem" }}>
                            <strong>Nota:</strong> Esta é página de contato. Mensagens são processadas manualmente. Para sugestões de artigos ou parcerias, utilize o formulário acima.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
}
