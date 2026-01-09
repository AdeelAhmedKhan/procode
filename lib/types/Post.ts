export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string; // The full article content
  imageUrl: string;
  slug: string;
  category: string;
}
