import React, { useEffect } from 'react'

import Post from '../Components/Post'

function BlogPost({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Post postId={match.params.id} />
}

export default BlogPost
