import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { MiddlePos, LoadIcon } from '../Styles/Styled-Components/Loader'

import services from '../Utils/services'
import PostList from '../Styles/Styled-Components/PostList'

import {
  SpacerTop,
} from '../Styles/Styled-Components/BlogPost'

import PostCard from '../Components/PostCard'

export default () => {
  const [posts, setPosts] = useState(undefined)
  const [failed, setFailed] = useState(false)

  const fetchPosts = async () => {
    try {
      const _posts = await services.get(`api/post/`)
      setPosts(_posts.data)
    } catch (e) {
      setFailed(true)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {
        failed
          ?
          <>
            <SpacerTop multiplier={12} />
            <h1>Back morreu men me manda mensagem ai</h1>
          </>
          :
          <>
            {
              posts
                ?
                <>
                  <SpacerTop multiplier={12} />
                  <PostList>
                    {posts.map((post, i) => {
                      return (
                        <li key={i}>
                          <PostCard post={post} />
                        </li>
                      )
                    })}
                  </PostList>
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
