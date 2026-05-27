import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    category?: string;
}

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
    const buildLink = (page: number) => {
        const queryParams = new URLSearchParams();
        if (page > 1) queryParams.set("page", page.toString());
        if (category) queryParams.set("category", category);
        
        const queryString = queryParams.toString();
        return queryString ? `/?${queryString}` : "/";
    };

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return pages;
    };

    return (
        <nav aria-label="Navegação de páginas" className="pagination">
            {/* Botão Anterior */}
            {currentPage > 1 ? (
                <Link
                    href={buildLink(currentPage - 1)}
                    className="pagination-item"
                    aria-label="Página Anterior"
                >
                    <ChevronLeft size={18} />
                </Link>
            ) : (
                <span className="pagination-item disabled" aria-hidden="true">
                    <ChevronLeft size={18} />
                </span>
            )}

            {/* Números das Páginas */}
            {getPageNumbers().map((pageNum, idx) => {
                if (pageNum === "...") {
                    return (
                        <span key={`dots-${idx}`} className="pagination-dots" aria-hidden="true">
                            ...
                        </span>
                    );
                }

                const page = pageNum as number;
                const isCurrent = page === currentPage;

                return (
                    <Link
                        key={page}
                        href={buildLink(page)}
                        className={`pagination-item${isCurrent ? " active" : ""}`}
                        aria-current={isCurrent ? "page" : undefined}
                    >
                        {page}
                    </Link>
                );
            })}

            {/* Botão Próximo */}
            {currentPage < totalPages ? (
                <Link
                    href={buildLink(currentPage + 1)}
                    className="pagination-item"
                    aria-label="Próxima Página"
                >
                    <ChevronRight size={18} />
                </Link>
            ) : (
                <span className="pagination-item disabled" aria-hidden="true">
                    <ChevronRight size={18} />
                </span>
            )}
        </nav>
    );
}
