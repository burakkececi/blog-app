import React from 'react'
import { Link } from 'react-router-dom'

const BlogItem = ({ id, title, description, dateAdded }) => {
  return (
    <div className='card bg-light m-3'>
      <div className="card-body card-text text-truncate" style={{maxHeight:"50vh"}}>{description}</div>
      <div className='row'>
        <div className="col-10">
        <div className="card-title"><p className='fw-bold fs-3 mx-2'>{title}</p></div>
        <div className="card-text"><p className='fst-italic fw-light mx-2'>{dateAdded}</p></div>
        </div>
        <div className="col-2">
          <Link to={`/blogs/${id}`} className="btn btn-primary">Learn More</Link>
        </div>
        
      </div>


    </div>
  )
}

export default BlogItem


