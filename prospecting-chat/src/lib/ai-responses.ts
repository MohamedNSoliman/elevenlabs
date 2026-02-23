const prospectingResponses: Record<string, string> = {
  company: `## Company Research: Acme Corporation

**Overview:**
Acme Corporation is a mid-market B2B SaaS company founded in 2015, headquartered in San Francisco. They specialize in supply chain management solutions with approximately 500 employees and an estimated ARR of $50M.

**Recent News:**
- Closed Series C funding round ($45M) in Q3 2025
- Expanded operations to European market
- Launched new AI-powered inventory prediction feature

**Key Decision Makers:**
- **Sarah Chen** - VP of Operations (likely champion)
- **Michael Torres** - CTO (technical evaluator)
- **Jennifer Walsh** - CFO (budget authority)

**Potential Pain Points:**
1. Scaling challenges with rapid growth
2. Integration complexity with legacy systems
3. Need for real-time analytics capabilities

**Conversation Starters:**
- "I noticed your recent expansion into Europe - how are you handling the increased complexity in your supply chain?"
- "Congratulations on the Series C! As you scale, what's your biggest operational challenge?"`,

  email: `## Cold Email Draft

**Subject:** Quick question about [Company]'s growth strategy

Hi [First Name],

I noticed [Company] recently [specific trigger event/news]. Congrats on that milestone!

I'm reaching out because we've helped similar companies in [industry] solve [specific pain point] — typically seeing [specific result, e.g., "30% faster sales cycles"].

Would you be open to a brief 15-minute chat next week to explore if there might be a fit?

Either way, I'd love to connect and learn more about what you're building.

Best,
[Your Name]

---

**Why this works:**
- Personalized opening with trigger event
- Social proof with specific metric
- Low-commitment ask (15 minutes)
- Graceful out ("either way")`,

  linkedin: `## LinkedIn Connection Request

**Version 1 (Trigger-based):**
"Hi [Name], saw your recent post about [topic] — really resonated with me. Would love to connect and exchange ideas on [related topic]."

**Version 2 (Mutual connection):**
"Hi [Name], [Mutual Connection] mentioned you're doing impressive work at [Company]. Always looking to connect with fellow [industry] professionals."

**Version 3 (Value-first):**
"Hi [Name], I put together a report on [relevant topic] that's helped others in [their role]. Happy to share if you're interested!"

---

**Tips for higher acceptance:**
- Keep under 300 characters
- Reference something specific
- Offer value, don't pitch
- Be genuinely curious`,

  questions: `## Discovery Questions for Sales Call

**Situation Questions:**
1. "Can you walk me through your current process for [relevant activity]?"
2. "How is your team currently structured to handle [relevant challenge]?"
3. "What tools or systems are you using today for [relevant function]?"

**Problem Questions:**
4. "What's your biggest challenge when it comes to [area]?"
5. "How much time does your team spend on [manual process]?"
6. "What happens when [pain point scenario] occurs?"

**Implication Questions:**
7. "How does that impact your team's ability to [desired outcome]?"
8. "What's the cost of not solving this in the next 6-12 months?"
9. "How does this affect your other initiatives?"

**Need-Payoff Questions:**
10. "If you could wave a magic wand, what would the ideal solution look like?"

---

**Pro Tips:**
- Listen more than you talk (aim for 70/30)
- Take notes and reference their specific words
- Don't jump to solutions too early`,

  objection: `## Objection Handling Framework

**Objection:** "We don't have budget for this right now."

### LAER Framework Response:

**Listen & Acknowledge:**
"I completely understand. Budget constraints are real, especially in the current environment."

**Ask Questions:**
"Can I ask — is this a timing issue, or is there something specific about the investment that's giving you pause?"

**Explore:**
"When you say 'right now,' what timeframe are you thinking? And what would need to change for this to become a priority?"

**Respond:**
"Many of our customers felt the same way initially. What we found is that the [specific ROI/time savings] often makes this pay for itself within [timeframe]. Would it be helpful if I shared a business case showing the expected return?"

---

**Alternative Angles:**
- "What if we started with a smaller pilot to prove value first?"
- "Is there a different budget line this could fall under?"
- "What would the cost be of NOT solving this problem?"`,

  followup: `## 5-Touch Follow-up Sequence

### Touch 1: Day 1 (Email)
**Subject:** Great connecting, [Name]
Brief thank you, recap key points discussed, confirm next steps.

### Touch 2: Day 3 (LinkedIn)
Connect on LinkedIn with personalized note referencing your conversation. Engage with their recent posts.

### Touch 3: Day 5 (Email + Value)
**Subject:** Thought you'd find this useful
Share relevant content (case study, article, report) related to their challenges.

### Touch 4: Day 8 (Phone/Voicemail)
Brief voicemail: "Hi [Name], following up on our conversation about [topic]. I have an idea that might help with [specific challenge]. Give me a call when you have 5 minutes."

### Touch 5: Day 12 (Email - Break-up)
**Subject:** Should I close your file?
"Hi [Name], I've reached out a few times and haven't heard back. I completely understand if the timing isn't right. Would it be helpful if I reached back out in [Q3/next quarter]? Just let me know and I'll set a reminder."

---

**Key Principles:**
- Vary channels (email, phone, LinkedIn, video)
- Add value at each touch
- Reference previous interactions
- Make it easy to respond`,

  default: `I'd be happy to help with your prospecting needs! Here are some things I can assist with:

**Research & Intelligence:**
- Company research and analysis
- Prospect profiling
- Industry insights

**Outreach:**
- Cold email drafts
- LinkedIn messages
- Call scripts

**Sales Process:**
- Discovery questions
- Objection handling
- Follow-up sequences

**Templates & Best Practices:**
- Email templates by situation
- Conversation frameworks
- Timing recommendations

What would you like to focus on? Feel free to provide specific details about your prospect or situation for more personalized guidance.`,
};

export function generateResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes('company') || lowerMessage.includes('research') || lowerMessage.includes('insight')) {
    return prospectingResponses.company;
  }
  if (lowerMessage.includes('email') || lowerMessage.includes('outreach') || lowerMessage.includes('cold')) {
    return prospectingResponses.email;
  }
  if (lowerMessage.includes('linkedin') || lowerMessage.includes('connection') || lowerMessage.includes('connect')) {
    return prospectingResponses.linkedin;
  }
  if (lowerMessage.includes('question') || lowerMessage.includes('discovery') || lowerMessage.includes('call')) {
    return prospectingResponses.questions;
  }
  if (lowerMessage.includes('objection') || lowerMessage.includes('budget') || lowerMessage.includes('handle')) {
    return prospectingResponses.objection;
  }
  if (lowerMessage.includes('follow') || lowerMessage.includes('sequence') || lowerMessage.includes('touch')) {
    return prospectingResponses.followup;
  }

  return prospectingResponses.default;
}
