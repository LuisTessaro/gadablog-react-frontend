import React from 'react'

import {
  SpacerTop,
  Image,
  PostTitle,
  PostSubTiltle,
} from '../../Styles/Styled-Components/BlogPost'

import RichTextViewer from '../RichTextViewer'

import indexToCategory from '../../Utils/indexToCategory'

export default ({
  post,
  author,
}) => {
  return (
    <>
      <SpacerTop multiplier={12} />
      <Image src={post.title_image} />

      <PostTitle>
        <p>{indexToCategory(post.category)}</p>
        <h1>{post.post_title}</h1>
      </PostTitle>

      <PostSubTiltle>
        <img src={author.photo} alt="poster" />
        <p className="name">Written by <a className="profile-link" href="/profile">{author.name}</a></p>
        <p className="date">{post.creation_date}</p>
      </PostSubTiltle>

      <RichTextViewer html={post.content} />
    </>
  )
}
