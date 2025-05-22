import React from "react";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How AI is Revolutionizing Modern Business",
    excerpt:
      "Explore how artificial intelligence is transforming industries, from automation to predictive analytics...",
    imageUrl: "/assets/blog1.jpg",
    link: "/blog/ai-revolution",
    date: "May 10, 2025",
  },
  {
    id: 2,
    title: "Top 5 Marketing Trends in 2025",
    excerpt:
      "Stay ahead of the competition with these data-driven digital marketing strategies that actually work.",
    imageUrl: "/assets/blog2.jpg",
    link: "/blog/marketing-trends-2025",
    date: "May 2, 2025",
  },
  {
    id: 3,
    title: "Custom Software: Build vs Buy?",
    excerpt:
      "Not sure whether to build custom software or go with off-the-shelf? Here’s what startups and enterprises need to know.",
    imageUrl: "/assets/blog3.jpg",
    link: "/blog/build-vs-buy",
    date: "April 28, 2025",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const BlogSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative blurred background blob */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#ec7c30] rounded-full blur-3xl opacity-20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-4xl font-bold text-createc-blue mb-2">
          Latest Insights
        </h2>
        <p className="text-gray-600 text- max-w-2xl mx-auto">
          Actionable ideas, expert strategies, and the latest innovations—straight from our digital minds.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.link}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group bg-white rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col h-full justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#ec7c30] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-[#ec7c30] group-hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
