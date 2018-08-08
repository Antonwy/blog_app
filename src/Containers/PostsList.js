import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../Redux/actions';
import {Link} from 'react-router-dom'
import PostListItem from '../Components/PostListItem';

class PostsList extends React.Component{

    componentDidMount(){
        this.props.onRequestPosts();
    }

    renderPosts = (post) => {
        const { id, title } = post;
        return(
            <PostListItem 
                key={id}
                id={id}
                title={title}
            />
        )
    }

    render() {
        const { posts } = this.props;

        let postList;

        console.log(posts.length)

        if(posts.length > 0){
            postList = posts.map(this.renderPosts);
        }else{
            postList = <PostListItem title="No Posts available..."/>
        }

        return (
            <div className="container w-75">
                <Link className="btn btn-success" to="/posts/new">
                    Create Post 
                </Link>
                <ul className="list-group my-4 mx-auto text-center">
                    <li className="list-group-item active">
                        <h3 className="my-auto">MY BLOG POSTS</h3>
                    </li>
                    {postList}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return{
      posts: state.requestPosts.posts
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        onRequestPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
