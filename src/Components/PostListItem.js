import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = (props) => {
  console.log(props)
  return (
    <li className="list-group-item item">
        <Link className="col-sm" to={`/posts/${props.id}`}>
        {props.title}
        </Link>
    </li>
  )
}

export default PostListItem
