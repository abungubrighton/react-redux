import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
            <div>
                <label>Title</label>
                <br />
                <input type="text" name='title'/>
            </div>
            <br />
            <div>
                <label>Body:</label>
                <br />
                <input type="text" name='body'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default  PostForm;