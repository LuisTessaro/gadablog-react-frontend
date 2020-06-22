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
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

import normalizer from '../../Utils/textNormalizer'

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
                  pathname: "/search",
                  search: `?query=${normalizer(tag)}`,
                }}
              >
                {`${tag}${arr.length !== i + 1 ? ', ' : ''}`}
              </Tag>
            )}
          </div>
          <div className="share">
            <p><i className="fas fa-share-alt" />Share this post</p>
            <div className="links">
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
              <TelegramShareButton url={`https://gadablog.herokuapp.com/post/${post.url}`} >
                <TelegramIcon size={32} round={true} />
              </TelegramShareButton>
            </div>
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
            <Link to='/post/como-escrever-um-post-no-blog' className="main">
              <h2>Programação</h2>
              <h1>Como escrever um Post no Blog</h1>
            </Link>
            <Link to='/post/como-escrever-um-post-no-blog' className="alt">
              <h2>Programação</h2>
              <h1>Como escrever um Post no Blog só que com background branco</h1>
            </Link>
          </div>
        </RelatedPosts>
      </PostFooter>

    </>
  )
}