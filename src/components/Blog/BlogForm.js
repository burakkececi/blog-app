import React, { Component } from 'react'

class BlogForm extends Component {

    state = {
        title: '',
        description: '',
        error : ''
    }

    onTitleChange = (e) => {
        const title = e.target.value
        this.setState({title})
    }

    onTextChange = (e) => {
        const description = e.target.value
        this.setState({description})
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.title || !this.state.description){
            this.setState({error: "Please fill the blanks!"})
        }else{
            this.setState({error : ''})
            this.props.onSubmit({
                title : this.state.title,
                description : this.state.description
            })
        }
    }

    render() {
        return (
            <div className='d-flex p-2 justify-content-center align-items-center' style={{ width: '100vw', height: '80vh' }}>
                <div className='border border-dark rounded bg-light'>
                    <form onSubmit={this.onSubmit} className='m-5'>
                        {this.state.error && <div className='alert alert-danger'>{this.state.error}</div>}
                        <div className='form-group m-2'>
                            <label className='h5'>Title: </label>
                            <input className='form-control form-control-lg' type="text" placeholder='Enter a title' onChange={this.onTitleChange} />
                        </div>
                        <div className='form-group m-2'>
                            <label className='h5'>Description: </label>
                            <textarea className='form-control form-control-lg' placeholder='Enter a text' onChange={this.onTextChange}></textarea>
                        </div>
                        <div className='form-group m-2'>
                            <button className='btn btn-success btn-lg btn-block' type='submit' style={{ width: "100%" }}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default BlogForm
