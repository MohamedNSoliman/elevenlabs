'use client';

import { useState, useCallback } from 'react';
import { Message, Conversation } from '@/types/chat';
import { generateResponse } from '@/lib/ai-responses';

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function generateTitle(message: string): string {
  const words = message.split(' ').slice(0, 5).join(' ');
  return words.length < message.length ? `${words}...` : words;
}

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const currentConversation = conversations.find(
    (c) => c.id === currentConversationId
  );

  const createNewConversation = useCallback(() => {
    setCurrentConversationId(null);
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      setIsLoading(true);

      const userMessage: Message = {
        id: generateId(),
        role: 'user',
        content,
        timestamp: new Date(),
      };

      let conversationId = currentConversationId;
      
      if (!conversationId) {
        const newConversation: Conversation = {
          id: generateId(),
          title: generateTitle(content),
          messages: [userMessage],
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        conversationId = newConversation.id;
        setConversations((prev) => [newConversation, ...prev]);
        setCurrentConversationId(conversationId);
      } else {
        setConversations((prev) =>
          prev.map((c) =>
            c.id === conversationId
              ? {
                  ...c,
                  messages: [...c.messages, userMessage],
                  updatedAt: new Date(),
                }
              : c
          )
        );
      }

      // Simulate AI response delay
      await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

      const responseContent = generateResponse(content);
      const assistantMessage: Message = {
        id: generateId(),
        role: 'assistant',
        content: responseContent,
        timestamp: new Date(),
      };

      setConversations((prev) =>
        prev.map((c) =>
          c.id === conversationId
            ? {
                ...c,
                messages: [...c.messages, assistantMessage],
                updatedAt: new Date(),
              }
            : c
        )
      );

      setIsLoading(false);
    },
    [currentConversationId]
  );

  const selectConversation = useCallback((id: string) => {
    setCurrentConversationId(id);
  }, []);

  return {
    conversations,
    currentConversation,
    currentConversationId,
    isLoading,
    sendMessage,
    createNewConversation,
    selectConversation,
  };
}
