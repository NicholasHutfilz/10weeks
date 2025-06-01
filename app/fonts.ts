import localFont from 'next/font/local';
import { Playfair_Display } from 'next/font/google';

export const calben = localFont({
  src: [
    {
      path: '../public/fonts/Calben-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Calben-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-calben',
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
}); 