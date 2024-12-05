interface PropsType {
    img: string;
    desc: string;
}

const BlogCard = ({ img, desc }: PropsType) => {
  return (
    <div className="blog-card">
      <div>
        <img 
         src={img} alt="blog_image" />
      </div>
      <div className="blog-card-content">

        <div className="blog-card-footer">
          <p>By: Admin</p>
          <p>14 Jan 2024</p>
        </div>
        <p className="blog-card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
