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
    title: "X Link Fixer",
    description: "Removing the negative algorithm effect from posting links by giving you the option to replace it with zero width whitespace characters.",
    status: "completed",
    images: ["/images/project5-1.jpg", "/images/project5-2.jpg"],
    content: "I’ve never built a chrome extension before, so I am looking forward to exploring how it works this week. This extension will fix the negative algorithm effect from posting links by giving you the option to replace it with zero width whitespace characters. This project is inspired by @chribjel.",
    liveLink: "https://10weeks.to/project/5",
  },
  {
    id: 6,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    id: 7,
    title: "????",
    description: "Coming soon",
    status: "upcoming",
  },
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