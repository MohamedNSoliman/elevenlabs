# Prospecting AI Chat Interface

A modern, ChatGPT-like interface for streamlining sales prospecting workflows. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **ChatGPT-like Interface**: Clean, modern chat UI with sidebar for conversation history
- **Prospecting Templates**: Quick-start templates for common sales tasks
- **Company Research**: Get comprehensive insights about target companies
- **Email Drafting**: Generate personalized cold outreach emails
- **LinkedIn Messages**: Craft engaging connection requests
- **Discovery Questions**: Prepare questions for sales calls
- **Objection Handling**: Get responses to common sales objections
- **Follow-up Sequences**: Create multi-touch follow-up campaigns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main chat page
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/
│   ├── Sidebar.tsx     # Conversation sidebar
│   ├── ChatMessage.tsx # Message display
│   ├── ChatInput.tsx   # Message input
│   └── ProspectingSuggestions.tsx  # Template suggestions
├── hooks/
│   └── useChat.ts      # Chat state management
├── lib/
│   ├── ai-responses.ts # Mock AI responses
│   └── prospecting-templates.ts  # Template definitions
└── types/
    └── chat.ts         # TypeScript interfaces
```

## Usage

1. **Start a new conversation**: Click "New Prospect Chat" in the sidebar
2. **Use templates**: Click on any template card to get started
3. **Ask questions**: Type your prospecting questions in the input field
4. **View history**: Access previous conversations from the sidebar

## Customization

### Adding New Templates

Edit `src/lib/prospecting-templates.ts` to add new prospecting templates:

```typescript
{
  id: 'unique-id',
  title: 'Template Title',
  description: 'What this template does',
  prompt: 'The default prompt text',
  icon: '🎯',
}
```

### Modifying AI Responses

Edit `src/lib/ai-responses.ts` to customize the AI response logic.

## License

MIT
