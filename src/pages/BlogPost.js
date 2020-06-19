import React, { useEffect } from 'react'

import Post from '../Components/Post'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import {
  BodyStyle,
  Content,
  SideContent,
} from '../Styles/Styled-Components/BlogPost'

function BlogPost({ match }) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <BodyStyle>
          <Content>
            <Post postId={match.params.id} />
          </Content>
          <SideContent>
            <Sidebar />
          </SideContent>
        </BodyStyle>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost
