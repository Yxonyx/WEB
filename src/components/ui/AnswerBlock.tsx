import type { ReactNode } from 'react';

// Use a local implementation or check if 'clsx' and 'tailwind-merge' are available if you want a robust 'cn'
// For now, a robust implementation:
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface AnswerBlockProps {
    id?: string;
    question: string;
    answer: string | ReactNode;
    className?: string;
}

export const AnswerBlock = ({ id, question, answer, className }: AnswerBlockProps) => {
    return (
        <article
            id={id}
            className={cn("geo-answer-block py-6 border-b border-white/10 last:border-0 group", className)}
            itemScope
            itemType="https://schema.org/Question"
        >
            <h3
                className="text-xl font-bold text-white mb-3 flex items-center gap-2 group-hover:text-neonBlue transition-colors"
                itemProp="name"
            >
                {question}
            </h3>
            <div
                className="text-gray-300 leading-relaxed space-y-2 font-light text-lg"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
            >
                <div itemProp="text">
                    {typeof answer === 'string' ? <p>{answer}</p> : answer}
                </div>
            </div>
        </article>
    );
};
