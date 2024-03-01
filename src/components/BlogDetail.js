import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const BlogDetail = (props) => {
  const { state } = useLocation();
  const { src, id, title, alt, snippet, detail } = state.thisCard;
  const style = {
    width: 100 + '%',
    height: 100 + '%'
  }

  const thisNavigate = useNavigate();
 

  return (

    <>
      <div className='col-sm-4'>
        <h2>Blog detail Left</h2>
        <div className='imageborder'>
          <img src={src}  style = {style } alt={alt} />
        </div>
      </div>

      <div className='col-sm-8'>
        <h2>{title}</h2>
        <article> 
          {snippet}
        </article>
        <hr />
        <article> 
          {detail}
        </article>
      </div>
      <div className=''>
        <button className="btn btn-secondary" onClick={() => thisNavigate(-1)}>Back</button>
      </div>
    </>
  )
}

export default BlogDetail