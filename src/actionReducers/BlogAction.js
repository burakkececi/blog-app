import { v4 as uuid } from 'uuid';

export const addBlog = ( {title = '', description = ''}) => {
  return ({
    type : 'ADD_BLOG',
    blog : {
        id : uuid(),
        title : title,
        description : description,
        dateAdded : new Date().toLocaleString()
    }
  })
}

export const removeBlog = ( id ) => {
    return ({
        type : 'REMOVE_BLOG',
        id : id
    })
}

export const updateBlog = ( {id , updates} ) => {
    return ({
        type : 'UPDATE_BLOG',
        id : id,
        updates : updates
    })
}

