'use client';

import { Clock } from 'lucide-react';

interface ReadingTimeProps {
    readTime: string;
}

export default function ReadingTime({ readTime }: ReadingTimeProps) {
    // Extrair número de minutos do string "5 min de leitura"
    const minutes = readTime.match(/\d+/) ? parseInt(readTime.match(/\d+/)![0]) : 5;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--muted)',
            fontSize: '0.9rem',
            fontWeight: '500',
        }}>
            <Clock size={16} color="var(--primary)" />
            <span title={`Tempo estimado de leitura: ${readTime}`}>
                {readTime}
            </span>
        </div>
    );
}
