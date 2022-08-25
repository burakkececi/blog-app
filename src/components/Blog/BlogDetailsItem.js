import React from 'react'

const BlogDetailsItem = ( { title, description, dateAdded }) => {
  return (
    <div>
      <img src='https://wallpaperboat.com/wp-content/uploads/2022/05/21/81956/soft-aesthetic-01.jpg' className='img-fluid'/>
      <div className="container">
        <div className="mt-2">
            <p><p className='fw-bold fs-2 mx-2'>{title}</p></p>
            <p className='fst-italic fw-light mx-2'>{dateAdded}</p>
        </div>
        <div className="">
            <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsItem

