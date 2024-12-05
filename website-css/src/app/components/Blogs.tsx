import BlogCard from "./BlogCard";

const blogData = [
    {
        img: "/post-1.jpg",
        desc: "Sample Description 1 some more text just to make UI a little attractive thats all",
    },
    {
        img: "/post-2.jpg",
        desc: "Sample Description 2 some more text just to make UI a little attractive thats all",
    },
    {
        img: "/post-3.jpg",
        desc: "Sample Description 3 some more text just to make UI a little attractive thats all",
    },
    {
        img: "/post-4.jpg",
        desc: "Sample Description 4 some more text just to make UI a little attractive thats all",
    },
];

const Blogs = () => {
  return (
    <div className="blog-section">
      <div className="container">
        <h2 className="blog-title">Our Blogs</h2>

        {/* Grid Layout */}
        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <BlogCard key={index} img={blog.img} desc={blog.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
