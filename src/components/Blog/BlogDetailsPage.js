import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import BlogDetailsItem from './BlogDetailsItem'

const BlogDetailsPage = (props) => {
  const {id} = useParams()
  const blog = { blog : props.blogs.find( (blog) => {
    return blog.id === id
  })
  }
  return (
    <div>
      <BlogDetailsItem {...blog.blog} />      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs : state.blog
  }
}

export default connect(mapStateToProps)(BlogDetailsPage)
