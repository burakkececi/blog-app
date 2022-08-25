import React from 'react'
import BlogList from './BlogList'

const BlogsPage = () => {
  return (
    <div className='container mt-5'>
      <div className="row mt-2"><div className="col-12"><p className='h2'>Blog Posts</p></div></div>
      <hr />
      <div className="row mt-2">
        <BlogList />
      </div>
    </div>
  )
}

export default BlogsPage
