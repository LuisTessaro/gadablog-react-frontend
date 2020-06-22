import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom'

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
        views,
      } = _post.data

      fetchAuthor(author_id)


      setPost({
        title_image,
        tagList,
        post_title,
        category,
        creation_date: moment(new Date(parseInt(_id.substring(0, 8), 16) * 1000)).format("DD/MM/YYYY"),
        post_id: _id,
        author_id,
        related_posts,
        content,
        url,
        views,
      })
    } catch (e) {
      setFailed(true)
    }
  }

  const handleChangeMatch = (matchedId) => {
    console.log('vou dar fetch')
    setPost(null)
    fetchPost(matchedId)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    handleChangeMatch(matchedId)
  }, [matchedId])


  if (failed)
    return <Redirect to="/page404" />

  if (!author || !post)
    return (
      <MiddlePos>
        <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
      </MiddlePos>
    )

  return (
    <>
      <PostBody author={author} post={post} />
      <PostFooter author={author} post={post} />
    </>
  )
}