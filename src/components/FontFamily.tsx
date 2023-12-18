import { Outfit, Oxanium, Poppins } from 'next/font/google';

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['600'],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '500', '400'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export { outfit, oxanium, poppins };
