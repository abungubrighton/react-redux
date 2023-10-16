import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
            
        };
        // bind the class(this) to onchange attribute
        this.onChange = this.onChange.bind(this);
    }
    // event handler called onChange , 
    //the one called in this manner {this.onChange}
    // could be any name
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
            <div>
                <label>Title</label>
                <br />
                <input type="text" name='title' value={this.state.title} onChange={this.onChange}/>
            </div>
            <br />
            <div>
                <label>Body:</label>
                <br />
                <input type="text" name='body' value={this.state.body} onChange={this.onChange}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default  PostForm;