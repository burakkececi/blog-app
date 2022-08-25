import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog } from '../../../actionReducers/BlogAction'
import BlogForm from '../BlogForm'

const AddBlogItem = (props) => {
  const history = useNavigate()
  return (
    <div>
        <BlogForm onSubmit= { ( blog ) => {
          props.dispatch(addBlog(blog))
          history("/blogs")
          console.log("success")
        }
        }/>
    </div>
  )
}

export default connect()(AddBlogItem)
