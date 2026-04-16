import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
    title: "Contato | Blog DividAI",
    description:
        "Entre em contato com a equipe da DividAI para enviar duvidas, sugestoes de pauta e oportunidades de parceria.",
    alternates: {
        canonical: "https://dividai.com/contato",
    },
};

export default function ContatoPage() {
    return <ContactPageClient />;
}
