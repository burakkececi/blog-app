import React from 'react'

const HomePage = () => {
  return (
    <div className='container mt-5'>
      <div className="card">
        <div className="row">
          <div className="col-12 m-3">
            <h1 className='h1 text-bold card-title'>Welcome, Burak!</h1>
            <p>Let's dive into new topics!</p>
            </div>
        </div>
        <div className="row mx-3">
          <div className="col-9">
            <div>
              <p className='h3 text-bold'>Latest Blog Posts</p>
            </div>
          </div>
          <div className="col-3">
            <div>
              <p className='h3 text-bold'>Topics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage