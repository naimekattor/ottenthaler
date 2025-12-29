"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Folder, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../types/blog"; 

const Blog = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false);
  useEffect(() => {
    const blogFetch = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`
        );
        //console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);
        const data: BlogPost[] = await res.json();
        console.log(data);

        setBlogPosts(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }finally {
        setLoading(false);
      }
    };
    blogFetch();
  }, []);

  return (
    <section className="py-20 px-4 bg-[#faf8f4] shadow">
      <div className="container mx-auto">
        <div className="text-start mb-12">
          <p className="text-sm text-muted-foreground mb-4 font-medium">
            Blog & News
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black/80 leading-tight">
            Räume schaffen, die Ihre Persönlichkeit widerspiegeln.
          </h2>
        </div>

        <div className="relative">
          {
            loading ? (
            // =================== LOADING STATE ===================
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Lade Blog-Beiträge...</p>
              </div>
            </div>
          ) : error ? (
            // =================== ERROR STATE ===================
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">Fehler beim Laden der Beiträge</p>
              <button
                onClick={() => window.location.reload()}
                className="text-primary hover:underline"
              >
                Erneut versuchen
              </button>
            </div>
          ) : blogPosts.length === 0 ? (
            // =================== EMPTY STATE ===================
            <div className="text-center py-20">
              <Folder className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Noch keine Beiträge
              </h3>
              <p className="text-muted-foreground">
                Wir arbeiten an spannenden Inhalten – schauen Sie bald wieder vorbei!
              </p>
            </div>
          ) : (
            // =================== SUCCESS: SHOW SWIPER ===================
            <>
            <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{
              el: ".team-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="team-swiper py-8"
          >
            {/* ✅ Map API posts */}
            {blogPosts.slice(0, 4).map((blog, indx) => (
              <SwiperSlide key={indx}>
                <div className="relative rounded overflow-visible py-16">
                  <Image
                    src={blog.image_url || "/images/placeholder.jpg"}
                    alt={blog.title}
                    width={800}
                    height={320}
                    className="w-full h-80 object-cover rounded"
                  />
                  <div className="absolute bottom-6 left-4 right-4 bg-[#F8F8F8] px-4 py-3 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <Folder size={16} />
                      <p>{blog.category}</p>
                    </div>
                    <h4 className="font-bold text-lg">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            
          </Swiper>
          {/* Pagination Dots */}
          <div
            ref={paginationRef}
            className="team-pagination flex justify-center mt-8 space-x-2"
          />
            </>)
          }
          

          
        </div>
      </div>
    </section>
  );
};

export default Blog;
