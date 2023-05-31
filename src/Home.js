//define a Home App function with a Div element
import { useState } from 'react';
import BlogList from './Bloglist';
import './App.css';
function Home() {
    
 // define const blogs and setblogs with array of objects and use useState hook
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        {title: 'test site' , body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return (
        <div className="home">
        <BlogList blogs={blogs} title="All Blogs" />
      </div>
    );
    }
// export the Home function
export default Home;