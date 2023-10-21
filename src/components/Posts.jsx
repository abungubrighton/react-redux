import React,{Component} from 'react';
import {fetchPosts} from '../actions/postActions';
import  {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Posts extends Component {

    componentDidMount (){
        this.props.fetchPosts();
    };
    // ALTERNATIVE
    //componentDidUpdate(prevProps) {
    //     if (this.props.newPost != prevProps.newPost) {
    //       // Perform some action when the prop changes
    //       this.props.posts.unshift(this.props.newPost);
    //     }
    // };
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.newPost !== nextProps.newPost) {
          // Perform some action when the prop changes
          this.props.posts.unshift(this.props.newPost);
        }
      };

    render() {
        const postItems =  this.props.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                {postItems}
            </div>
        )
        
    }
};
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}


const mapStateToProps = (state) =>({
    posts:state.posts.items,
    newPost: state.posts.item // access the created post
});


export default connect (mapStateToProps,{fetchPosts})(Posts);