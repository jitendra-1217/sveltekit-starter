import type { PageServerLoad } from './$types';

interface Quote {
  q: string;
  a: string;
  h: string;
}

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    // Server-side fetch to avoid CORS issues
    const response = await fetch('https://zenquotes.io/api/random');

    if (!response.ok) {
      return { quote: null };
    }

    const quotes: Quote[] = await response.json();
    return { quote: quotes[0] };
  } catch {
    return { quote: null };
  }
};
