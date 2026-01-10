import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Post {
  id: number;
  title: string;
  excerpt: string;
}

const posts: Post[] = Array(5).fill({
  id: 1,
  title: 'Title',
  excerpt:
    'Looking to discuss how automation can benefit your business? Schedule a free consultation with our experts to explore tailored solutions that meet your unique needs.',
});

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

export default function BlogList() {
  return (
    <div className="text-primary mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        {/* --- Sidebar --- */}
        <aside className="space-y-10 lg:col-span-1">
          <div className="relative">
            <Input
              placeholder="Search Posts"
              className="rounded-full border-slate-300 pr-10 pl-4 focus-visible:ring-slate-400"
            />
            <Search className="absolute top-2.5 right-3 h-5 w-5 text-slate-400" />
          </div>

          <nav>
            <h3 className="mb-6 text-xl font-bold text-[#1e293b]">Categories</h3>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-primary text-sm font-semibold tracking-wide hover:underline"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* --- Main Content --- */}
        <main className="lg:col-span-3">
          <h2 className="text-primary mb-10 text-4xl font-bold">Latest Posts</h2>

          <div className="space-y-10">
            {posts.map((post, idx) => (
              <div key={idx} className="group flex cursor-pointer flex-col gap-6 sm:flex-row">
                {/* Image Placeholder */}
                <div className="h-32 w-full shrink-0 rounded-xl bg-slate-200 sm:w-32" />

                {/* Content */}
                <div className="flex flex-col justify-center space-y-2">
                  <h3 className="text-primary text-2xl font-bold">{post.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-slate-600">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-primary flex items-center gap-2 pt-2 text-sm font-semibold transition-all hover:gap-3"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* --- Pagination --- */}
          <div className="text-primary mt-16 flex items-center justify-end gap-4 text-sm font-bold">
            <span>PAGE 1</span>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="bg-secondary hover:bg-secondary/70 h-10 w-10 rounded-full border-none"
              >
                <ChevronLeft className="text-primary h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-secondary hover:bg-secondary/70 h-10 w-10 rounded-full border-none"
              >
                <ChevronRight className="text-primary h-5 w-5" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
