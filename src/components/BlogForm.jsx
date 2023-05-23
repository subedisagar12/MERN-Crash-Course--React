import { useState } from "react";
import axios from "axios";
function BlogForm({ allBlogs, setAllBlogs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function createBlog(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: import.meta.env.VITE_API_URL + "/blog/create",
      data: {
        title: title,
        description: description,
      },
    })
      .then((res) => {
        alert("Your blog has been added");
        setTitle("");
        setDescription("");
        let temp = [...allBlogs];
        temp.push(res.data.data);
        setAllBlogs(temp);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <>
      <form onSubmit={createBlog}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Blog Description
          </label>
          <textarea
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            rows={8}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default BlogForm;
