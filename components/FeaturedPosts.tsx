import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { blogPosts } from "@/data/blogPosts"

export default function FeaturedPosts() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-10">
      <div className="flex items-center justify-between ">
        <h2 className="text-4xl font-bold text-[#002B5B]">Featured Posts</h2>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
        }}
        className="w-full mx-auto"
      >
        <CarouselContent className="-ml-4">
          {blogPosts.map((post) => (
            <CarouselItem key={post.id} className="pl-4 md:basis-1/2">
              <div className="p-1">
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="flex flex-col p-0">
                    {/* Image Container */}
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl mb-6">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Meta & Title */}
                    <span className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-primary line-clamp-3 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center font-bold text-primary hover:gap-2 transition-all"
                    >
                      Read More <span className="ml-2">→</span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12 border-none bg-gray-100 hover:bg-gray-200" />
          <CarouselNext className="-right-12 border-none bg-gray-100 hover:bg-gray-200" />
        </div>
      </Carousel>
    </section>
  )
}