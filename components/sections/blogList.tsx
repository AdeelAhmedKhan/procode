import React from 'react';
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Types ---
interface Post {
  id: number;
  title: string;
  excerpt: string;
}

const posts: Post[] = Array(5).fill({
  id: 1,
  title: "Title",
  excerpt: "Looking to discuss how automation can benefit your business? Schedule a free consultation with our experts to explore tailored solutions that meet your unique needs."
});

const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

export default function BlogList() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-[#1e293b]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* --- Sidebar --- */}
        <aside className="lg:col-span-1 space-y-10">
          <div className="relative">
            <Input 
              placeholder="Search Posts" 
              className="rounded-full pl-4 pr-10 border-slate-300 focus-visible:ring-slate-400"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-slate-400" />
          </div>

          <nav>
            <h3 className="text-xl font-bold mb-6 text-[#1e293b]">Categories</h3>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-primary font-semibold hover:underline text-sm tracking-wide">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* --- Main Content --- */}
        <main className="lg:col-span-3">
          <h2 className="text-4xl font-bold mb-10 text-primary">Latest Posts</h2>
          
          <div className="space-y-10">
            {posts.map((post, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
                {/* Image Placeholder */}
                <div className="w-full sm:w-32 h-32 bg-slate-200 rounded-xl shrink-0" />
                
                {/* Content */}
                <div className="flex flex-col justify-center space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{post.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                  <a href="#" className="flex items-center gap-2 text-primary font-semibold text-sm pt-2 hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* --- Pagination --- */}
          <div className="flex items-center justify-end gap-4 mt-16 text-primary font-bold text-sm">
            <span>PAGE 1</span>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="rounded-full bg-secondary border-none hover:bg-secondary/70 h-10 w-10">
                <ChevronLeft className="h-5 w-5 text-slate-700" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-secondary border-none hover:bg-secondary/70 h-10 w-10">
                <ChevronRight className="h-5 w-5 text-slate-700" />
              </Button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}