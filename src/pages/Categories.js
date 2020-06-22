import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import PostList from '../Styles/Styled-Components/PostList'

import { MiddlePos, LoadIcon } from '../Styles/Styled-Components/Loader'

import { colors, } from '../Styles/StyleGuide'

import services from '../Utils/services'

import indexToCategory from '../Utils/indexToCategory'

import {
  SpacerTop,
} from '../Styles/Styled-Components/BlogPost'

import PostCard from '../Components/PostCard'

const CategoryName = styled.h1`
  color: ${colors.main};
  margin-bottom: 32px;
  font-size: 2rem;
`

export default ({ match }) => {
  const [posts, setPosts] = useState(undefined)
  const [failed, setFailed] = useState(false)

  const matchedId = match.params.id

  const fetchPosts = async () => {
    try {
      const _posts = await services.get(`api/info/category/${matchedId}`)
      setPosts(_posts.data)
    } catch (e) {
      setFailed(true)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    handleChangeMatch()
  }, [matchedId])

  const handleChangeMatch = () => {
    window.scrollTo(0, 0)
    setPosts(null)
    fetchPosts()
  }

  return (
    <>
      <SpacerTop multiplier={12} />
      <CategoryName>{indexToCategory(matchedId)}</CategoryName>
      {
        failed
          ?
          <>
            <h1>Back morreu men me manda mensagem ai</h1>
          </>
          :
          <>
            {
              posts
                ?
                <>
                  <PostList>
                    {posts.reverse().map((post, i) => {
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
