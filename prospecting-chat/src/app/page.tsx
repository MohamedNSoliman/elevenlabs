'use client';

import { useState, useEffect, useRef } from 'react';
import { Sidebar, ChatMessage, ChatInput, ProspectingSuggestions } from '@/components';
import { useChat } from '@/hooks/useChat';
import { prospectingTemplates } from '@/lib/prospecting-templates';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const {
    conversations,
    currentConversation,
    currentConversationId,
    isLoading,
    sendMessage,
    createNewConversation,
    selectConversation,
  } = useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentConversation?.messages]);

  const handleSendMessage = (content: string) => {
    sendMessage(content);
  };

  const handleSelectTemplate = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar
        conversations={conversations}
        currentConversationId={currentConversationId}
        onSelectConversation={selectConversation}
        onNewConversation={createNewConversation}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center gap-4 px-4 py-3 border-b border-gray-700 bg-gray-900">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 text-gray-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-white">
            {currentConversation?.title || 'Prospecting AI'}
          </h1>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          {!currentConversation || currentConversation.messages.length === 0 ? (
            <ProspectingSuggestions
              templates={prospectingTemplates}
              onSelectTemplate={handleSelectTemplate}
            />
          ) : (
            <div className="pb-4">
              {currentConversation.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="py-6 bg-gray-800/50">
                  <div className="max-w-3xl mx-auto px-4 flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
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
                    <div className="flex-1">
                      <div className="font-medium text-sm text-gray-300 mb-1">
                        Prospecting AI
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}
