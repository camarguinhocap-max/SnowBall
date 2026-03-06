"use server";

import { Client } from 'pg';
import nodemailer from 'nodemailer';

export async function subscribeNewsletter(email: string) {
    if (!email || !email.includes("@")) {
        return { success: false, error: "E-mail inválido." };
    }

    // Use the connection string without sslmode parameter to add the ssl object manually
    const connectionString = process.env.DIRECT_URL;

    if (!connectionString) {
        return { success: false, error: "Erro de configuração no servidor." };
    }

    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();

        // Check if email already exists in Contact table as newsletter
        const checkRes = await client.query(
            `SELECT id FROM "Contact" WHERE email = $1 AND "formType" = $2`,
            [email, 'newsletter']
        );

        if (checkRes.rows.length > 0) {
            return { success: false, error: "Este e-mail já está cadastrado na newsletter!" };
        }

        // Insert into Contact
        const id = crypto.randomUUID();
        const now = new Date();

        await client.query(
            `INSERT INTO "Contact" (id, name, email, subject, message, "formType", status, "createdAt", "updatedAt") 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [id, 'Blog Subscriber', email, 'Newsletter Subscription', 'Cadastro pelo blog.dividai.com', 'newsletter', 'new', now, now]
        );

        // send welcome email asynchronously (non-blocking)
        (async () => {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT) || 587,
                    secure: process.env.SMTP_SECURE === 'true',
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                await transporter.sendMail({
                    from: process.env.SMTP_FROM || `"Blog DividAI" <no-reply@${process.env.SMTP_DOMAIN || 'dividai.com'}>`,
                    to: email,
                    subject: 'Bem-vindo à newsletter DividAI',
                    text: `Obrigado por se inscrever na newsletter do Blog DividAI! Fique de olho no seu e-mail para receber dicas de finanças e novidades.`,
                    html: `<p>Obrigado por se inscrever na newsletter do <strong>Blog DividAI</strong>!</p><p>Fique de olho no seu e-mail para receber dicas de finanças e novidades.</p>`,
                });
            } catch (err) {
                console.error('Erro enviando e-mail de boas-vindas:', err);
            }
        })();

        return { success: true };
    } catch (err) {
        console.error("Newsletter DB Error:", err);
        return { success: false, error: "Erro interno. Tente novamente mais tarde." };
    } finally {
        await client.end();
    }
}
