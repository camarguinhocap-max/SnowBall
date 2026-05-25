import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getVisiblePosts } from "@/lib/posts";

// Cron job chamado pelo Vercel a cada hora
// Configurado em vercel.json: "schedule": "0 * * * *"
export async function GET(request: Request) {
    const authHeader = request.headers.get("authorization");

    // Vercel injeta automaticamente o CRON_SECRET no header Authorization
    // quando o job é disparado pelo scheduler. Permite também chamadas manuais.
    if (
        process.env.CRON_SECRET &&
        authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const now = new Date().toISOString();

        // Revalida a homepage e páginas principais
        revalidatePath("/");
        revalidatePath("/sitemap.xml");
        revalidatePath("/api/feed");
        revalidatePath("/api/search");

        // Revalida cada post visível individualmente para garantir aparição
        const visiblePosts = getVisiblePosts();
        for (const post of visiblePosts) {
            revalidatePath(`/post/${post.slug}`);
        }

        console.log(`[Cron] Revalidação executada em ${now} — ${visiblePosts.length} posts revalidados`);

        return NextResponse.json({
            revalidated: true,
            timestamp: now,
            postsRevalidated: visiblePosts.length,
            message: "Homepage, posts e feeds revalidados com sucesso",
        });
    } catch (error) {
        console.error("[Cron] Erro na revalidação:", error);
        return NextResponse.json({ error: "Falha na revalidação" }, { status: 500 });
    }
}
