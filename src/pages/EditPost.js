import React, { useState, useEffect } from 'react'

import axios from 'axios'

import styled from 'styled-components'

import { Link, Redirect } from 'react-router-dom'

import { colors } from '../Styles/StyleGuide'

import Container from '../Styles/Styled-Components/Container'

import indexToCategory from '../Utils/indexToCategory'

import parser from 'html-react-parser'

import services from '../Utils/services'

import {
  SpacerTop,
  Image,
  PostTitle,
  PostSubTiltle,
  PostFooter,
  FooterInfo,
  Author,
  RelatedPosts,
  Tag,
} from '../Styles/Styled-Components/BlogPost'

const CreationPage = styled.div`
  width: 100vw;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;
`

const Builder = styled.div`
  width: 50%;
  height: 88vh;
  border: 1px solid black;
  margin-right: 16px;
  padding: 16px;
  overflow-y: auto;

  h1 {
    color: ${colors.main};
    font-weight: 600;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 8px;
  }
  
  input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width:100%;
    margin-bottom: 8px;
    padding: 8px;
  }

  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width:100%;
    margin-bottom: 8px;
    padding: 8px;
  }
  
  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    resize: vertical;
    overflow-y: auto;
    min-height: 200px;
    margin-bottom: 8px;
  }
`

const Preview = styled.div`
  width: 50%;
  padding: 16px;
  overflow-y: auto;
  height: 88vh;
  border: 1px solid black;
`

const Button = styled.a`
  color: white;
  background-color: lightgreen;
  border-radius: 5px;
  padding: 16px 32px;
  font-weight: 700;
  margin-left: 16px;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`

export default ({ location }) => {
  const url = location.pathname.split('/edit_post/')[1]

  const related_posts = {
    "main": {
      "tag": "Category",
      "title": "Main Related Post Title"
    },
    "alt": {
      "tag": "Category",
      "title": "Alt Related Post Title"
    }
  }

  const [title_image, settitle_image] = useState('')
  const [_title_image, _settitle_image] = useState('')
  const [tagList, settagList] = useState('')
  const [_tagList, _settagList] = useState('')
  const [post_title, setpost_title] = useState('')
  const [_post_title, _setpost_title] = useState('')
  const [about, setabout] = useState('')
  const [_about, _setabout] = useState('')
  const [category, setcategory] = useState('')
  const [_category, _setcategory] = useState('')
  const [content, setcontent] = useState('')
  const [_content, _setcontent] = useState('')
  const [postId, setPostId] = useState('')

  const submit = async v => {
    try {
      const config = {
        headers: {
          "x-access-token": localStorage.getItem('token'),
        }
      }

      const values = {
        post_title: v._post_title,
        content: v._content,
        category: v._category,
        title_image: v._title_image,
        about: v._about,
        tagList: v._tagList.split(',')
      }
      await services.patch(`/api/post/${postId}`, values, config)
      console.log('done!')
    } catch (e) {
      console.log('erro: ', e)
    }
  }

  if (!localStorage.getItem('logedin'))
    return <Redirect to="/login" />

  const fetchPost = async url => {
    try {
      const { data } = await services.get(`/api/post/${url}`)
      const tags = data.tagList.reduce((acc, e, i) => {
        const ret = i > 0 ? acc + "," + e : e
        return ret
      }, '')

      setPostId(data._id)
      setcontent(data.content)
      settitle_image(data.title_image)
      setcategory(data.category)
      setpost_title(data.post_title)
      setabout(data.about)

      settagList(tags)
      _setcontent(data.content)
      _settitle_image(data.title_image)
      _setcategory(data.category)
      _setpost_title(data.post_title)
      _setabout(data.about)
      _settagList(tags)
    } catch (e) {
      console.log('erro: ', e)
    }
  }
  useEffect(() => {
    fetchPost(url)
  }, [])

  return (
    <>
      <CreationPage>
        <Builder>
          <h1>Imagem do Título:</h1>
          <input value={_title_image} onChange={(e) => _settitle_image(e.target.value)} type="text" />

          <h1>Tags:</h1>
          <input value={_tagList} onChange={(e) => _settagList(e.target.value)} type="text" />

          <h1>Categoria:</h1>

          <select value={_category} onChange={(e) => _setcategory(e.target.value)}>
            <option value={0}>---</option>
            <option value={1}>Gaems</option>
            <option value={2}>Programação</option>
            <option value={3}>Dicas</option>
            <option value={4}>Hot Takes</option>
            <option value={5}>Opnião</option>
          </select>

          <h1>Título do Post:</h1>
          <input value={_post_title} onChange={(e) => _setpost_title(e.target.value)} type="text" />

          <h1>Breve descrição do Post:</h1>
          <input value={_about} onChange={(e) => _setabout(e.target.value)} type="text" />

          <h1>Conteúdo do post:</h1>
          <textarea value={_content} onChange={(e) => _setcontent(e.target.value)}>
          </textarea>

          <Button onClick={() => {
            setcontent(_content)
            settitle_image(_title_image)
            settagList(_tagList)
            setcategory(_category)
            setpost_title(_post_title)
            setabout(_about)
          }} style={{ position: 'fixed', bottom: '106px', left: '8px' }}>Ver Preview</Button>


        </Builder>
        <Preview>
          <>
            <SpacerTop multiplier={12} />
            <Image src={title_image} />

            <PostTitle>
              <p>{indexToCategory(category)}</p>
              <h1>{post_title}</h1>
            </PostTitle>

            <PostSubTiltle>
              <img src={"data:image/jpeg;base64,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"} alt="poster" />
              <p className="name">Written by Your Name</p>
              <p className="date">03/03/2020 - XXX views</p>
            </PostSubTiltle>

            <Container>
              {parser(content)}
            </Container>

            <PostFooter>
              <FooterInfo>
                <div className="tags"><i className="fas fa-tags" />
                  {tagList.replace(/\s/g, '').trim().split(',').map((tag, i, arr) =>
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
                <div className="share"><i className="fas fa-share-alt" />Share this post</div>
              </FooterInfo>

              <Author>
                <img src={"data:image/jpeg;base64,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"} alt="profile" />

                <div className="content">
                  <div>
                    <h1>Your Name</h1>
                    <h5>About author:</h5>
                  </div>
                  <p>Your about goes here</p>
                </div>

              </Author>
            </PostFooter>
          </>
        </Preview>
      </CreationPage>
      <div style={{ paddingRight: '16px ', display: 'flex', justifyContent: 'flex-end' }}>
        <Button as={Link} to='/'>Voltar</Button>
        <Button onClick={() => submit({
          related_posts,
          _title_image,
          _tagList,
          _category,
          _post_title,
          _about,
          _content,
        })}>salvar</Button>
      </div>
    </>
  )
}
