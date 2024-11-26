import React from "react";


import BlogImage1 from "./assets/Blog/Blog1.png";
import BlogImage2 from "./assets/Blog/Blog2.png";
import BlogImage3 from "./assets/Blog/Blog3.png";
import AuthorImage1 from "./assets/Blog/Avatar.png";
import AuthorImage2 from "./assets/Blog/Avatar1.png";
import AuthorImage3 from "./assets/Blog/Avatar2.png";

const blogPosts = [
  {
    id: 1,
    category: "Design",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    authorImage: AuthorImage1,
    image: BlogImage1,
  },
  {
    id: 2,
    category: "Product",
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    authorImage: AuthorImage2,
    image: BlogImage2,
  },
  {
    id: 3,
    category: "Software Engineering",
    title: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    date: "18 Jan 2024",
    authorImage: AuthorImage3,
    image: BlogImage3,
  },
];

const BlogSection = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-20 pt-12 pb-0 relative">
  
      <div className="mb-8 pt-20">
        <h4 className="text-purple-600 font-semibold text-[16px]">Our blog</h4>
        <h2 className="text-2xl font-bold text-gray-900 text-[28px] sm:text-[36px] pt-4">
          Latest blog posts
        </h2>
        <p className="text-gray-600 mt-2 pt-4 text-[16px] sm:text-[20px]">
          Tools and strategies modern teams need to help their companies grow.
        </p>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden">
       
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[200px] sm:h-[240px] object-cover"
            />

       
            <div className="p-6 pl-0">
              <p className="text-purple-600 text-sm font-medium mb-2">
                {post.category}
              </p>
              <h3 className="text-[20px] sm:text-[24px] font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-[14px] sm:text-[16px] mb-4">
                {post.description}
              </p>

             
              <div className="flex items-center">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-800 text-[14px] font-medium">
                    {post.author}
                  </p>
                  <p className="text-gray-500 text-[12px] sm:text-[14px]">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     
      <div className="block sm:hidden mt-8 text-center">
        <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition">
          View all posts
        </button>
      </div>

    
      <div className="absolute top-28 right-8 hidden md:block">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition max-w-[400px]">
          View all posts
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
