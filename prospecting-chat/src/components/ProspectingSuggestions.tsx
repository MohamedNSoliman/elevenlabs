'use client';

import { ProspectingTemplate } from '@/types/chat';

interface ProspectingSuggestionsProps {
  templates: ProspectingTemplate[];
  onSelectTemplate: (prompt: string) => void;
}

export function ProspectingSuggestions({
  templates,
  onSelectTemplate,
}: ProspectingSuggestionsProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
            <svg
              className="w-8 h-8 text-white"
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
          <h1 className="text-3xl font-bold text-white mb-2">
            Prospecting AI Assistant
          </h1>
          <p className="text-gray-400 text-lg">
            Your intelligent sales prospecting companion. Get help with research, outreach, and closing deals.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.prompt)}
              className="group p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500 hover:bg-gray-750 transition-all text-left"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{template.icon}</span>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {template.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">💡 Quick Tips</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Be specific about your prospect&apos;s company, role, and industry</li>
            <li>• Include context like previous interactions or pain points</li>
            <li>• Ask for alternatives or iterations to refine responses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
