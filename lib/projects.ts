// Define project type
export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  images?: string[];
  content?: string;
  technologies?: string[];
  liveLink?: string;
  githubLink?: string;
}

// Projects data
export const projects: Project[] = [
  /* {
    id: 1,
    title: "Interactive Portfolio",
    description: "A responsive portfolio website with interactive elements and smooth animations",
    status: "completed",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    content: "This project demonstrates the power of interactive web design using modern CSS techniques and JavaScript. The portfolio features smooth transitions, responsive layouts, and accessibility considerations.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/example/portfolio",
  }, */
  {
    id: 1,
    title: "Tammany Times",
    description: "An infinite scroller news website for the Tammany Times, a newsletter on New York politics that I write every morning.",
    status: "completed",
    images: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    content: "I've been writing the Tammany Times for months now, but I never had a good place to link to full articles written by me. This week I spent time creating the front end website itself, but also a custom backend CMS specifically designed for my needs as a live breaking news website. It is built on NextJS, Tailwind CSS, Heroku, and Postgres. I also spent time this week getting an official New York City Press Credential, which will allow me to better cover political events in the city. This will be an ongoing project as I continue to report on the latest political news, so check it out and subscribe if you are interested!",
    liveLink: "https://tammanytimes.com",
  },
  {
    id: 2,
    title: "Simple Fitness Tracker",
    description: "An easy workout tracker that just tells you what to do and keeps you coming back. Built to teach myself iOS apps, and convince myself to work out more.",
    status: "completed",
    images: ["/images/project2-1.jpg", "/images/project2-2.jpg"],
    content: "I wanted a simple workout app that generated AI-powered workouts, told me exactly what to do, and made it easy to track progress—including photos. So I built one. It includes a clean calendar layout for visual progress, an onboarding flow, and user profiles with saved preferences. I used React Native and Expo.dev, then tested it on my phone using TestFlight. This was a great intro to mobile app development and helped me learn how to design a functional product that’s actually usable by others—not just me. I’ll keep improving it as I train, but it’s already made my workouts way more efficient.",
    liveLink: "https://10weeks.to/project/2",
  },
  {
    id: 3,
    title: "Learning Palantir Tools",
    description: "Explored Palantir Foundry and AIP to better understand the platform before starting my Meritocracy Fellowship this August.",
    status: "completed",
    images: ["/images/project3-1.jpg", "/images/project3-2.jpg"],
    content: "This week I took a break from building and focused on learning. I’m joining Palantir as a Meritocracy Fellow at the end of the summer, so I spent time exploring what the company’s platform actually does. I dove into Foundry and AIP to understand how data is modeled, workflows are built, and AI is integrated. It was a shift from my usual hands-on projects, but still a valuable deep dive that left me feeling much more prepared for what's ahead. No flashy demo this week—but definitely gained important skills that I’ll use in August.",
    liveLink: "https://10weeks.to/project/3",
  },
  {
    id: 4,
    title: "Reunion",
    description: "Rethinking how schools communicate with former students, away from infinite donor emails to a more personalized, interactive experience.",
    status: "completed",
    images: ["/images/project4-1.jpg", "/images/project4-2.jpg"],
    content: "I’ve long wanted to build a smarter way for schools to engage their graduates beyond email blasts, and now I’ve launched a fully featured, SMS-powered alumni communications platform. The admin dashboard, built with Next.js, shadcn/ui, and Supabase, enables staff to design and send personalized, two-way text campaigns for reunions, fundraising drives, volunteer mobilization, and data collection. The SMS frontend, powered by Twilio, Python, OpenRouter, and Supabase, delivers real-time conversations, RSVP tracking, peer-to-peer asks, and donor reminders. If you’re at a school ready to transform alumni outreach, reach out to schedule a demo or book a consult!",
    liveLink: "https://reunion.chat",
  },
  {
    id: 5,
    title: "LinkVeil",
    description: "Removing the negative algorithm effect from posting links by giving you the option to replace it with zero width whitespace characters.",
    status: "completed",
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
    content: "This week I built LinkVeil, my first Chrome extension, which neutralizes the “link penalty” on social platforms by invisibly padding URLs with zero‑width whitespace characters. Built using the standard Chrome Extensions format (JavaScript, HTML, CSS), LinkVeil gives you a one‑click toggle to cloak any outbound link, preserving engagement metrics without disrupting user experience. Inspired by @chribjel’s clever workaround, it installs in seconds and runs seamlessly in the background. This was a very interesting project, with some challenges I've never experienced before, especially with regards to inserting code into pre-existing websites like X after they rendered on the browser.",
    liveLink: "https://10weeks.to/project/5",
  },
  {
    id: 6,
    title: "Physical Credentials Tracker",
    description: "A barcode-driven workflow for event staff to register attendees by scanning badges.",
    status: "completed",
    images: ["/images/project6-1.jpg", "/images/project6-2.jpg"],
    content: "Fed up with chaotic badge scanning at conferences, I developed a Credentials Tracker that replaces messy check‑ins with a smooth, barcode‑driven workflow. This web‑ready app, built on Python Flask with Socket.IO, Bootstrap, and SQLite, lets event staff register attendees by simply scanning barcode‑printed badges. Real‑time updates show who’s checked in, and the intuitive dashboard makes it easy to export attendance logs or troubleshoot missing credentials on the fly. After testing at a real major political event, it cut check‑in times drastically and practically eliminated entry errors.",
    liveLink: "https://10weeks.to/project/6",
  },
  {
    id: 7,
    title: "Frank",
    description: "An open source AI-powered project management tool for modern teams.",
    status: "completed",
    images: ["/images/project7-1.jpg", "/images/project7-2.jpg"],
    content: "I’ve built Frank, the first open‑source, AI‑powered alternative to Trello that puts productivity front and center. Intelligent automations triage new tasks, suggest optimal assignees based on capacity, and surface looming roadblocks before they become bottlenecks. Fully self‑hostable and community‑driven, Frank’s transparent codebase lets you extend functionality, integrate with existing tools, or swap in custom plugins—no vendor lock‑in ever. Whether you’re a one‑person startup or a global enterprise, Frank empowers your team to manage projects on your own terms.",
    liveLink: "https://onfrank.com",
  },
  /* { THIS IS ON PAUSE FOR NOW
    id: 7,
    title: "Language Learning Teddy Bear",
    description: "A talking teddy bear that helps kids practice foreign languages through AI-guided conversations.",
    status: "completed",
    images: ["/images/project7-1.jpg", "/images/project7-2.jpg"],
    content: "I’m midway through my first real hardware project, a talking bear that helps kids practice foreign languages through AI‑guided conversations. Powered by a Raspberry Pi Zero, inexpensive microphones and speakers, and an OpenAI‑backed dialogue engine, the teddy bear listens, responds, and gently corrects pronunciation in English, Spanish, and beyond. Its colorful LEDs cue turn‑taking, and offline caching ensures smooth interactions even without Wi‑Fi. While I’m still fine‑tuning the hardware assembly and conversation modules, I’m on track to have a fully functioning prototype by week’s end—bringing screen‑free language learning into cuddly, conversational form.",
    liveLink: "https://10weeks.to/project/7",
  }, */
  {
    id: 8,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 9,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 10,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
]; 