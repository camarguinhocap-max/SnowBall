"use server";

import { Client } from 'pg';

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

        return { success: true };
    } catch (err) {
        console.error("Newsletter DB Error:", err);
        return { success: false, error: "Erro interno. Tente novamente mais tarde." };
    } finally {
        await client.end();
    }
}
