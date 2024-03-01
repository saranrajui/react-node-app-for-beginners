import React from 'react'

function Post(props) {
    console.log("props", props)
  return (
    <div class="card">
      <div class="card-header">
        {props?.post?.title}
      </div>
      <div class="card-body">
        <h5 class="card-title">{props?.post?.title}</h5>
        <p class="card-text">{props?.post?.body}</p>
        <a href="#" class="btn btn-primary">Go to {props?.post?.id}</a>
      </div>
    </div>
  )
}

export default Post