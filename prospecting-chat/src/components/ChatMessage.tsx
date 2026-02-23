'use client';

import { Message } from '@/types/chat';
import { useMemo } from 'react';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  const formattedContent = useMemo(() => {
    if (isUser) return message.content;

    let content = message.content;
    
    // Convert markdown headers
    content = content.replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2 text-gray-100">$1</h3>');
    content = content.replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-6 mb-3 text-white">$1</h2>');
    
    // Convert bold text
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
    
    // Convert bullet points
    content = content.replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">$1</li>');
    content = content.replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4 mb-1"><span class="font-medium">$1.</span> $2</li>');
    
    // Wrap consecutive list items in ul/ol
    content = content.replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="list-disc list-inside my-2 space-y-1">$&</ul>');
    
    // Convert horizontal rules
    content = content.replace(/^---$/gm, '<hr class="my-4 border-gray-600" />');
    
    // Convert line breaks to paragraphs
    const paragraphs = content.split('\n\n');
    content = paragraphs
      .map((p) => {
        if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<hr')) {
          return p;
        }
        if (p.trim()) {
          return `<p class="mb-3 leading-relaxed">${p.replace(/\n/g, '<br />')}</p>`;
        }
        return '';
      })
      .join('');

    return content;
  }, [message.content, isUser]);

  return (
    <div className={`py-6 ${isUser ? 'bg-transparent' : 'bg-gray-800/50'}`}>
      <div className="max-w-3xl mx-auto px-4 flex gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {isUser ? (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Message Content */}
        <div className="flex-1 min-w-0">
          <div className="font-medium text-sm text-gray-300 mb-1">
            {isUser ? 'You' : 'Prospecting AI'}
          </div>
          {isUser ? (
            <div className="text-gray-100 whitespace-pre-wrap">{message.content}</div>
          ) : (
            <div
              className="text-gray-200 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
