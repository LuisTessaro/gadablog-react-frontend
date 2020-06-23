import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MiddlePos, LoadIcon } from '../Styles/Styled-Components/Loader'

import services from '../Utils/services'


import {
  SpacerTop,
} from '../Styles/Styled-Components/BlogPost'

const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    border: 1px solid lightgray;
    padding: 16px;
    min-width: 33%;
    width: 33%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-bottom: 8px;
    }
    .icons {
      i {
        cursor: pointer;
        font-size: 2rem;
      }
      i.far.fa-edit{
        color: lightgreen;
        margin-right: 8px;
      }
      i.fa-trash-alt{
        color: lightcoral;
      }
    }
  }

`

export default () => {
  const [posts, setPosts] = useState(undefined)
  const [failed, setFailed] = useState(false)

  const fetchPosts = async () => {
    try {
      const config = {
        headers: {
          "x-access-token": localStorage.getItem('token'),
        }
      }
      const _posts = await services.get(`api/post/my_posts`, config)
      setPosts(_posts.data)
    } catch (e) {
      setFailed(true)
    }
  }

  const deletePost = async (id, title) => {
    const re = window.confirm('Tem certeza que deseja deletar o post ' + title)
    if (re) {
      try {
        const config = {
          headers: {
            "x-access-token": localStorage.getItem('token'),
          }
        }
        await services.delete(`api/post/${id}`, config)
        setPosts(null)
        await fetchPosts()
      } catch (e) {
        setFailed(true)
      }
    }
  }

  useEffect(() => {
    fetchPosts()
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SpacerTop multiplier={12} />
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
                          <p>{post.post_title}</p>
                          <div className="icons">
                            <Link
                              to={{
                                pathname: `/edit_post/${post.url}`
                              }}
                            >
                              <i className="far fa-edit" />
                            </Link>
                            <i onClick={() => deletePost(post._id, post.post_title)} className="far fa-trash-alt" />
                          </div>
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
