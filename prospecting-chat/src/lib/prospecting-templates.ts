import { ProspectingTemplate } from '@/types/chat';

export const prospectingTemplates: ProspectingTemplate[] = [
  {
    id: '1',
    title: 'Company Research',
    description: 'Get comprehensive insights about a target company',
    prompt: 'Research [Company Name] and provide key insights including: company overview, recent news, key decision makers, potential pain points, and conversation starters.',
    icon: '🏢',
  },
  {
    id: '2',
    title: 'Cold Email Draft',
    description: 'Generate personalized cold outreach emails',
    prompt: 'Write a personalized cold email to [Prospect Name] at [Company Name]. They are the [Job Title]. Focus on [Value Proposition] and include a clear call-to-action.',
    icon: '✉️',
  },
  {
    id: '3',
    title: 'LinkedIn Message',
    description: 'Craft engaging LinkedIn connection requests',
    prompt: 'Write a LinkedIn connection request message for [Prospect Name], [Job Title] at [Company Name]. Keep it under 300 characters and make it personal.',
    icon: '💼',
  },
  {
    id: '4',
    title: 'Discovery Questions',
    description: 'Prepare questions for discovery calls',
    prompt: 'Generate 10 discovery questions for a call with [Prospect Name] from [Company Name] in the [Industry] industry. Focus on uncovering pain points and decision-making process.',
    icon: '❓',
  },
  {
    id: '5',
    title: 'Objection Handling',
    description: 'Prepare responses to common objections',
    prompt: 'Provide responses to the objection: "[Objection]" from a prospect in the [Industry] industry. Include empathy, reframing, and value reinforcement.',
    icon: '🛡️',
  },
  {
    id: '6',
    title: 'Follow-up Sequence',
    description: 'Create a multi-touch follow-up sequence',
    prompt: 'Create a 5-touch follow-up sequence for [Prospect Name] at [Company Name] after [Previous Interaction]. Include timing, channel mix, and messaging themes.',
    icon: '📅',
  },
];
