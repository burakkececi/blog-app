import React from 'react'
import { connect } from 'react-redux'
import BlogItem from './BlogItem'

const BlogList = (props) => {
  return (
    <ul>
      {props.blogs.map( (blog) => {
        return <BlogItem key={blog.id} {...blog}/>
      })}
    </ul>
  )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blog
    }
}

export default connect(mapStateToProps)(BlogList)
