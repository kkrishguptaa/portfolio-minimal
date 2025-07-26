const config: Config = {
  projects: [
    {
      name: "reseter.css",
      description:
        "The modern CSS reset (3m+ JSDelivr Hits, 70k+ NPM Installs, 1.4k+ stars)",
      url: "https://github.com/kkrishguptaa/reseter.css",
    },
    {
      name: "Orpheus",
      description: "📝 Poetry Showcase Built With Next.Js and Tailwind",
      url: "https://orpheus.krishg.com",
    },
    {
      name: "Nom",
      description: "How much do I love your name?",
      url: "https://nom.krishg.com",
    },
    {
      name: "Dockyard",
      description:
        "🐳 The YSWS Dock. A HackClub YSWS dashboard built with Sveltekit",
      url: "https://dockyard.krishg.com",
    },
    {
      name: "Trevenant",
      description: "Beautiful Opinionated Logging for Node.js ✍️",
      url: "https://github.com/kkrishguptaa/trevenant",
    },
    {
      name: "names",
      description:
        "Wall of Nicknames – A collection of nicknames received by me",
      url: "https://names.krishg.com",
    },
    {
      name: "Delphi",
      description: "The Oracle of CSS – A Guide to CSS",
      url: "https://delphi.krishg.com",
    },
    {
      name: "Mnemo",
      description:
        "Save snips of information under various categories to remember them 🧠",
      url: "https://github.com/kkrishguptaa/mnemo",
    },
    {
      name: "Azelf",
      description: "Download, Optimize and Save Images from the Web 🔥",
      url: "https://github.com/kkrishguptaa/azelf",
    },
    {
      name: "Tastebuds",
      description:
        "One line AI-generated description of your recent music taste 💄",
      url: "https://tastebuds.krishg.com",
    },
    {
      name: "HTM Discord Bot",
      description:
        "Economy Management solution for one of India's largest Hackathons",
      url: "https://github.com/kkrishguptaa/bot-dc-htm",
    },
    {
      name: "RepoRater.JS",
      description: "Wrapper over the RepoRater API",
      url: "https://github.com/kkrishguptaa/repo-rater.js",
    },
    {
      name: "RepoRater Action",
      description:
        "GitHub Action to ask for a review of your repositories using RepoRater",
      url: "https://github.com/kkrishguptaa/action-repo-rater",
    },
    {
      name: "BioDrop Self",
      description: "Custom Skins for BioDrop",
      url: "https://github.com/kkrishguptaa/biodrop-self",
    },
    {
      name: "Go Todo API",
      description: "A simple REST API for a Todo app built with Go",
      url: "https://github.com/kkrishguptaa/go-todo-api",
    },
  ],
};

interface Config {
  projects: Array<{
    name: string;
    description: string;
    url: string;
  }>;
}

export default config;
