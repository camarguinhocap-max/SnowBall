'use client';

import { Clock } from 'lucide-react';

interface ReadingTimeProps {
    readTime?: string;
}

export default function ReadingTime({ readTime }: ReadingTimeProps) {
    // Determine minutes defaulting to 5 if not provided or parsing fails
    const minutes = readTime ? (readTime.match(/\d+/) ? parseInt(readTime.match(/\d+/)![0]) : 5) : 5;

    // Use the original readTime string if available, else fallback to default string
    const display = readTime ?? `${minutes} min de leitura`;

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
            <span title={`Tempo estimado de leitura: ${display}`}>
                {display}
            </span>
        </div>
    );
}
