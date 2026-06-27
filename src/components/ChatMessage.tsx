import React from 'react';
import Markdown from 'react-markdown';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex w-full py-6 px-4 sm:px-8 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex flex-col w-full max-w-3xl ${isUser ? 'items-end' : 'items-start'}`}>
        <span className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60">
          {isUser ? 'Client Representative' : 'Lead Consultant'}
        </span>
        <div
          className={`p-6 sm:p-8 border border-[#1A1A1A] w-full ${
            isUser
              ? 'bg-[#1A1A1A] text-[#FAF9F6] shadow-[-8px_8px_0px_rgba(26,26,26,0.2)]'
              : 'bg-white text-[#1A1A1A] shadow-[8px_8px_0px_#1A1A1A]'
          }`}
        >
          <div 
            className={`prose max-w-none ${
              isUser 
                ? 'prose-invert prose-p:leading-relaxed prose-p:text-[#FAF9F6]' 
                : 'prose-neutral font-serif prose-p:leading-relaxed prose-headings:font-serif prose-headings:font-normal prose-strong:font-bold prose-p:text-[#1A1A1A] prose-headings:text-[#1A1A1A]'
            }`}
          >
            <Markdown>{message.text}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
