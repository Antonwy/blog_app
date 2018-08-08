import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../Redux/actions'
import { Link } from 'react-router-dom'


export class ShowPost extends Component {
  
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id)
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {

    const { post } = this.props;

    if(!post){
      return <h1 className="text-center">Loading...</h1>
    }

    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">{post.title}!</h1>
          <p className="lead">{post.content}</p>
          <hr className="my-4"/>
          <p>{post.categories}</p>
          <Link to="/" className="btn btn-primary btn-lg" role="button">Back</Link>
          <button className="btn btn-danger btn-lg ml-2" onClick={this.onDeleteClick}>Delete</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { post: state.requestPosts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);

