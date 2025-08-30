import { Playwrite_US_Modern } from 'next/font/google';

export const playwrite = Playwrite_US_Modern({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playwrite',
  fallback: ['system-ui', 'Arial'],
});
