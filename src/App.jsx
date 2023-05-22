import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

import { useState } from "react";

function App() {
  // State to store blogs
  const [allBlogs, setAllBlogs] = useState([]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <BlogList allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
          </div>
          <div className="col-4">
            <BlogForm allBlogs={allBlogs} setAllBlogs={setAllBlogs} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
