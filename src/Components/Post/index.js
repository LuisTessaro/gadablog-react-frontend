import React, { useState, useEffect } from 'react'

import axios from 'axios'

import moment from 'moment'

import PostBody from './PostBody'
import PostFooter from './PostFooter'

import { MiddlePos, LoadIcon } from '../../Styles/Styled-Components/Loader'

export default ({ postId }) => {
  const [author, setAuthor] = useState(null)
  const [post, setPost] = useState(null)
  const [failed, setFailed] = useState(false)

  const fetchAuthor = async (id) => {
    try {
      const _author = await axios.get(`https://gadablog-rest-api.herokuapp.com/api/user/${id}`)
      const { name, photo, about, } = _author.data
      setAuthor({ name, photo, about })
    } catch (e) {
      console.log('invalid author')
      setFailed(true)
    }
  }

  const fetchPost = async (postId) => {
    try {
      const _post = await axios.get(`https://gadablog-rest-api.herokuapp.com/api/post/${postId}`)
      const {
        _id,
        related_posts,
        title_image,
        tag,
        post_title,
        author_id,
        content,
      } = _post.data

      fetchAuthor(author_id)

      setPost({
        title_image,
        tag,
        post_title,
        creation_date: moment(new Date(parseInt(author_id.toString().substring(0, 8), 16) * 1000).toString()).format("DD/MM/YYYY"),
        post_id: _id,
        author_id,
        related_posts,
        content,
      })
    } catch (e) {
      setFailed(true)
    }
  }

  useEffect(() => {
    fetchPost(postId)
  }, [])

  return (
    <>
      {failed
        ?
        <>
          <h1>POST NÃO ENCONTRADO!!!!</h1>
        </>
        :
        <>
          {author && post
            ?
            <>
              <PostBody author={author} post={post} />
              <PostFooter author={author} post={post} />
            </>
            :
            <MiddlePos>
              <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
            </MiddlePos>
          }
        </>
      }
    </>
  )
}