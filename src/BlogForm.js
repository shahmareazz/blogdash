import React, { useState } from 'react';

const BlogForm = () => {
  const [blogData, setBlogData] = useState({
    blogName: '',
    description: '',
    authorName: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
      console.log(blogData);
      // Reset form
      setBlogData({
        blogName: '',
        description: '',
        authorName: ''
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (blogData.blogName.trim() === '') {
      newErrors.blogName = 'Blog Name is required';
      isValid = false;
    }

    if (blogData.description.trim() === '') {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    if (blogData.authorName.trim() === '') {
      newErrors.authorName = 'Author Name is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="container mt-4">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="blogName" className="form-label">Blog Name</label>
          <input
            type="text"
            id="blogName"
            name="blogName"
            className={`form-control ${errors.blogName && 'is-invalid'}`}
            value={blogData.blogName}
            onChange={handleChange}
          />
          {errors.blogName && <div className="invalid-feedback">{errors.blogName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className={`form-control ${errors.description && 'is-invalid'}`}
            value={blogData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="authorName" className="form-label">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            className={`form-control ${errors.authorName && 'is-invalid'}`}
            value={blogData.authorName}
            onChange={handleChange}
          />
          {errors.authorName && <div className="invalid-feedback">{errors.authorName}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;