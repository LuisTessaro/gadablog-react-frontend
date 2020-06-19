import React, { useState, useEffect } from 'react'

import axios from 'axios'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import { MiddlePos, LoadIcon } from '../Styles/Styled-Components/Loader'

import { colors, spacers } from '../Styles/StyleGuide'

import {
  BodyStyle,
  Content,
  SideContent,
  SpacerTop,
} from '../Styles/Styled-Components/BlogPost'

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
      i{
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


export default () => {
  const [posts, setPosts] = useState(undefined)
  const [failed, setFailed] = useState(false)

  const fetchPosts = async () => {
    try {
      const _posts = await axios.get(`https://gadablog-rest-api.herokuapp.com/api/post/`)
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
      <Header />
      <div className="container">
        <BodyStyle>
          <Content>
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
                                <Link to={`/post/${post._id}`}>
                                  <img alt="post" src={post.title_image} />
                                  <div className="info">
                                    <div>
                                      <div className="top">
                                        <h1>{post.post_title}</h1>
                                        <i className="fa fa-chevron-right" />
                                      </div>
                                      <p className="tag">{post.tag}</p>
                                    </div>
                                    <p className="description">LoLo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius ullamcorper vestibulum. Fusce vitae enim ante. Nulla tortor odio, tincidunt sit amet convallis eu, consequat quis massa. Suspendisse ut ultricies odio. Quisque dolor sapien, posuere sed euismod vel, bibendum sed tortor. </p>
                                  </div>
                                </Link>
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
          </Content>
          <SideContent>
            <Sidebar />
          </SideContent>
        </BodyStyle>
      </div>
      <Footer />
    </>
  )
}
