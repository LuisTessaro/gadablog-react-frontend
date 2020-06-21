import React, { useState, useEffect } from 'react'

import moment from 'moment'

import PostBody from './PostBody'
import PostFooter from './PostFooter'

import { MiddlePos, LoadIcon } from '../../Styles/Styled-Components/Loader'

import services from '../../Utils/services'

export default ({ postId }) => {
  const matchedId = postId
  const [author, setAuthor] = useState(null)
  const [post, setPost] = useState(null)
  const [failed, setFailed] = useState(false)

  const fetchAuthor = async (id) => {
    try {
      const _author = await services.get(`/api/user/${id}`)
      const { name, photo, about, } = _author.data
      setAuthor({ name, photo, about })
    } catch (e) {
      console.log('invalid author')
      setFailed(true)
    }
  }


  const fetchPost = async (postId) => {
    try {
      const _post = await services.get(`/api/post/${postId}`)
      const {
        _id,
        related_posts,
        title_image,
        tagList,
        category,
        post_title,
        author_id,
        content,
        url,
      } = _post.data

      fetchAuthor(author_id)

      setPost({
        title_image,
        tagList,
        post_title,
        category,
        creation_date: moment(new Date(parseInt(author_id.toString().substring(0, 8), 16) * 1000).toString()).format("DD/MM/YYYY"),
        post_id: _id,
        author_id,
        related_posts,
        content,
        url,
      })
    } catch (e) {
      setFailed(true)
    }
  }

  const handleChangeMatch = (matchedId) => {
    setPost(null)
    fetchPost(matchedId)
  }


  useEffect(() => {
    fetchPost(postId)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    handleChangeMatch(matchedId)
  }, [matchedId])

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