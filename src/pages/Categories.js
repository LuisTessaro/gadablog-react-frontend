import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'


import { MiddlePos, LoadIcon } from '../Styles/Styled-Components/Loader'

import { colors, } from '../Styles/StyleGuide'

import services from '../Utils/services'

import indexToCategory from '../Utils/indexToCategory'

import {
  SpacerTop,
} from '../Styles/Styled-Components/BlogPost'

const PostCard = ({ post }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <Link to={`/post/${post.url}`}>

      <img onLoad={() => setLoaded(true)} style={{ display: loaded ? 'block' : 'none' }} src={post.title_image} alt="post" />
      <div style={{ display: loaded ? 'none' : 'flex', minHeight: 200, minWidth: 350, justifyContent: 'center', alignItems: 'center' }}>
        <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
      </div>

      <div className="info">
        <div>
          <div className="top">
            <h1>{post.post_title}</h1>
            <i className="fa fa-chevron-right" />
          </div>
          <p className="tag">{post.tag}</p>
        </div>
        <p className="description">{post.about}</p>
      </div>
    </Link>
  )
}


const PostList = styled.ul`
  a {
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;


    text-decoration: none;

    cursor: pointer;

    color:gray;

    &:hover {
      i.fa-chevron-right {
        transform: translateX(10px);
      }
    }

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      object-fit: cover;
      width: 350px;
      height: 200px;
      min-width: 350px;
      min-height: 200px;
      padding-right: 16px;
    }

    @media (max-width: 768px) {
      img {
        width: 100%;
        height: 250px;
        margin-bottom: 16px;
        padding: 0;
      }
      flex-direction: column;
      justify-content: center;
    }

    .info {
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: space-between;
      height: 200px;
      width: 100%;

      .top{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
          font-weight: 700;
          font-size: 20px;
          color: ${colors.main};
          margin-bottom: 8px;
        }
        i {
          color: ${colors.main};
          font-size: 2rem;
          transition: all 0.1s ease-in-out;
        }
        
      }
  
      .tag {
        font-style: italic;
        color: #6e7795;
        margin-bottom: 16px;
      }
  
      .description {
        font-weight: 400;
      }
    }
    
  }

`


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
      <CategoryName>{indexToCategory(matchedId)}{matchedId}</CategoryName>
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
