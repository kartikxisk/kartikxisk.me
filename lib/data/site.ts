/** Central personal/site configuration — single source of truth. */

export const siteConfig = {
  name: "Kartik Kumar",
  headline: "Hello, I'm",
  roles: ["Frontend Developer", "React.js Developer", "Next.js Developer"],
  description:
    '3+ years of experience building scalable web applications, LMS solutions, and e-learning platforms with React.js & Next.js',
  email: "ki.kartik11@gmail.com",
  phone: "+91-8743870095",
  phoneRaw: "+918743870095",
  location: "Delhi, India",
  github: "https://github.com/kartikxisk",
  linkedin: "https://linkedin.com/in/kartikxisk",
  repo: "https://github.com/kartikxisk/kartikxisk.me",
} as const;

export type SiteConfig = typeof siteConfig;
