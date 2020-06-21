import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { LoadIcon } from '../../Styles/Styled-Components/Loader'

import indexToCategory from '../../Utils/indexToCategory'

export default ({ post }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Link to={`/post/${post.url}`}>

      <img onLoad={() => setLoaded(true)} style={{ display: loaded ? 'block' : 'none' }} src={post.title_image} alt="post" />
      <div style={{ display: loaded ? 'none' : 'flex', minHeight: 200, minWidth: 280, justifyContent: 'center', alignItems: 'center' }}>
        <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
      </div>

      <div className="info">
        <div>
          <div className="top">
            <div>
              <h1>{post.post_title}</h1>
              <p>{indexToCategory(post.category)}</p>
            </div>
            <i className="fa fa-chevron-right" />
          </div>
          <p className="tag">{post.tag}</p>
        </div>
        <p className="description">{post.about}</p>
      </div>
    </Link>
  )
}