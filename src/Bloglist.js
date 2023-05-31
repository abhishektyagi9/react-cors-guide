//define BlogList as const function with a Div element
const BlogList = ({ blogs, title, handleDelete }) => {
    // return the Div element with the title
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {/* map through the blogs array and return a div element with the blog title, body, and author */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </div>
            ))}
            </div>
    );
            
}
export default BlogList;