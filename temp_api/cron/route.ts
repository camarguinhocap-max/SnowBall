import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// Cron job chamado pelo Vercel todo dia às 03:00 UTC (meia-noite de Brasília)
// Configurado em vercel.json
export async function GET(request: Request) {
    const authHeader = request.headers.get("authorization");

    // Proteção básica com secret para evitar chamadas não autorizadas
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Revalida todas as rotas relevantes para que os novos posts apareçam
        revalidatePath("/");
        revalidatePath("/post/[slug]", "page");
        revalidatePath("/sitemap.xml");
        revalidatePath("/api/feed");

        const now = new Date().toISOString();
        console.log(`[Cron] Revalidação executada em ${now}`);

        return NextResponse.json({
            revalidated: true,
            timestamp: now,
            message: "Homepage e posts revalidados com sucesso",
        });
    } catch (error) {
        console.error("[Cron] Erro na revalidação:", error);
        return NextResponse.json({ error: "Falha na revalidação" }, { status: 500 });
    }
}
