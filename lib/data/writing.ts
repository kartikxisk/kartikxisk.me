/** Published writing. Titles, links and dates come straight from the Medium feed. */
export interface Article {
  title: string;
  url: string;
  date: string;
  topic: string;
}

export const articles: Article[] = [
  {
    title:
      "Groupsgyani: a simple way to discover WhatsApp, Telegram and Discord communities",
    url: "https://kartikxisk.medium.com/groupsgyani-a-simple-way-to-discover-whatsapp-telegram-and-discord-communities-5f838a99f7df",
    date: "Jun 2026",
    topic: "Side project",
  },
  {
    title: "Zero: Vercel Labs just changed the AI agent game forever",
    url: "https://kartikxisk.medium.com/zero-vercel-labs-just-changed-the-ai-agent-game-forever-f64a80c83df8",
    date: "May 2026",
    topic: "AI tooling",
  },
  {
    title:
      "I built an Instagram mass tagging tool with Electron and Puppeteer — here's what I learned",
    url: "https://kartikxisk.medium.com/i-built-an-instagram-mass-tagging-tool-with-electron-and-puppeteer-heres-what-i-learned-c09d64ae1914",
    date: "May 2026",
    topic: "Automation",
  },
  {
    title:
      "How to use different Git credentials for different projects on the same machine",
    url: "https://kartikxisk.medium.com/how-to-use-different-git-credentials-for-different-projects-on-the-same-machine-b18630c1487e",
    date: "Jan 2026",
    topic: "Workflow",
  },
];
