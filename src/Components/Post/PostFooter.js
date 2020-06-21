import React from 'react'

import { Link } from 'react-router-dom'

import {
  PostFooter,
  FooterInfo,
  Author,
  RelatedPosts,
  Tag,
} from '../../Styles/Styled-Components/BlogPost'

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share'

export default ({ author, post }) => {
  return (
    <>
      <PostFooter>
        <FooterInfo>
          <div className="tags">
            <i className="fas fa-tags" />
            {post.tagList.map((tag, i, arr) =>
              <Tag
                key={i}
                as={Link}
                to={{
                  pathname: "/tags",
                  search: `?tag=${tag}`,
                }}
              >
                {`${tag}${arr.length !== i + 1 ? ', ' : ''}`}
              </Tag>
            )}
          </div>
          <div className="share">
            <p><i className="fas fa-share-alt" />Share this post</p>
            <TwitterShareButton url={`https://gadablog.herokuapp.com/post/${post.url}`} >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton url={`https://gadablog.herokuapp.com/post/${post.url}`} >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <EmailShareButton url={`https://gadablog.herokuapp.com/post/${post.url}`} >
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <LinkedinShareButton url={`https://gadablog.herokuapp.com/post/${post.url}`} >
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </div>

        </FooterInfo>
        <Author>
          <img src={author.photo} alt="profile" />

          <div className="content">
            <div>
              <h1>{author.name}</h1>
              <h5>About author:</h5>
            </div>
            <p>{author.about}</p>
          </div>

        </Author>

        <RelatedPosts>
          <h1>Postagems relacionadas</h1>
          <div className="post-list">
            <div className="main">
              <h2>{post.related_posts.main.tag}</h2>
              <h1>{post.related_posts.main.title}</h1>
            </div>
            <div className="alt">
              <h2>{post.related_posts.alt.tag}</h2>
              <h1>{post.related_posts.alt.title}</h1>
            </div>
          </div>
        </RelatedPosts>
      </PostFooter>

    </>
  )
}