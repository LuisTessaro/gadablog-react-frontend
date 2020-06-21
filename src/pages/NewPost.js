import React, { useState } from 'react'

import axios from 'axios'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { colors } from '../Styles/StyleGuide'

import Container from '../Styles/Styled-Components/Container'

import parser from 'html-react-parser'

import {
  SpacerTop,
  Image,
  PostTitle,
  PostSubTiltle,
  PostFooter,
  FooterInfo,
  Author,
  RelatedPosts,
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

export default () => {
  // const tag = "Programação de level alto"
  // const post_title = "Giovani brabo"
  // const about = "Giovanni é brabo mesmo."
  const related_posts = {
    "main": {
      "tag": "Programação",
      "title": "Post Main color"
    },
    "alt": {
      "tag": "Programação",
      "title": "Post Alt color"
    }
  }

  const creation_date = Date.now().toString()

  const author = {
    photo: "https://i1.sndcdn.com/artworks-000336423393-xzn1i7-t500x500.jpg",
    name: "luis"
  }

  // const content = "<p>AAAAAAAA EEEEEE eros luctus, dignissim nisl et, scelerisque tellus. Suspendisse aliquet turpis ipsum, suscipit viverra eros porta ut. Etiam fermentum at justo in commodo. Duis ac mollis ligula. Etiam quis tincidunt risus. Ut pulvinar, ante nec placerat hendrerit, justo arcu congue dolor, ac fringilla nisl neque eu eros. Nullam gravida, risus sed rhoncus gravida, sapien velit rutrum mauris, in consectetur ante erat a nisi. Nam eleifend a sem ut rutrum. Quisque nec urna enim. Ut ornare leo at facilisis bibendum. Fusce facilisis cursus sapien vel mattis. Integer at malesuada est. Ut ultricies, nibh sit amet porttitor semper, felis nisi lacinia lacus, ut ornare orci nunc in lectus. Nulla ultrices faucibus ante, a consequat nisi auctor non. Pellentesque a ornare tortor, at tempor mauris.</p><div class='feature-text'><p>Deveria funfar</p></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec eros luctus, dignissim nisl et, scelerisque tellus. Suspendisse aliquet turpis ipsum, suscipit viverra eros porta ut. Etiam fermentum at justo in commodo. Duis ac mollis ligula. Etiam quis tincidunt risus. Ut pulvinar, ante nec placerat hendrerit, justo arcu congue dolor, ac fringilla nisl neque eu eros. Nullam gravida, risus sed rhoncus gravida, sapien velit rutrum mauris, in consectetur ante erat a nisi. Nam eleifend a sem ut rutrum. Quisque nec urna enim. Ut ornare leo at facilisis bibendum. Fusce facilisis cursus sapien vel mattis. Integer at malesuada est. Ut ultricies, nibh sit amet porttitor semper, felis nisi lacinia lacus, ut ornare orci nunc in lectus. Nulla ultrices faucibus ante, a consequat nisi auctor non. Pellentesque a ornare tortor, at tempor mauris.</p><img src='https://w7.pngwing.com/pngs/973/193/png-transparent-spongebob-squidward-doing-dab-squidward-tentacles-dab-patrick-star-meme-t-shirt-meme-mammal-hand-vertebrate.png'></img><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec eros luctus, dignissim nisl et, scelerisque tellus. Suspendisse aliquet turpis ipsum, suscipit viverra eros porta ut. Etiam fermentum at justo in commodo. Duis ac mollis ligula. Etiam quis tincidunt risus. Ut pulvinar, ante nec placerat hendrerit, justo arcu congue dolor, ac fringilla nisl neque eu eros. Nullam gravida, risus sed rhoncus gravida, sapien velit rutrum mauris, in consectetur ante erat a nisi. Nam eleifend a sem ut rutrum. Quisque nec urna enim. Ut ornare leo at facilisis bibendum. Fusce facilisis cursus sapien vel mattis. Integer at malesuada est. Ut ultricies, nibh sit amet porttitor semper, felis nisi lacinia lacus, ut ornare orci nunc in lectus. Nulla ultrices faucibus ante, a consequat nisi auctor non. Pellentesque a ornare tortor, at tempor mauris.</p>"
  const [content, setContent] = useState('')
  const [_content, _setContent] = useState('')
  const [title_image, settitle_image] = useState('')
  const [tags, settags] = useState('')
  const [category, setcategory] = useState('')
  const [post_title, setpost_title] = useState('')
  const [about, setabout] = useState('')

  const submit = async (values) => {
    try {
      const config = {
        headers: {
          "x-access-token": localStorage.getItem('token'),
        }
      }

      await axios.post(`https://gadablog-rest-api.herokuapp.com/api/post/`, values, config)
      console.log('Done')
    } catch (e) {
      console.log('erro: ', e)
    }
  }

  return (
    <>
      <CreationPage>
        <Builder>
          <h1>Imagem do Título:</h1>
          <input onChange={(e) => settitle_image(e.target.value)} type="text" />

          <h1>Tags:</h1>
          <input onChange={(e) => settags(e.target.value)} type="text" />

          <h1>Categoria:</h1>
          <input onChange={(e) => setcategory(e.target.value)} type="text" />

          <h1>Título do Post:</h1>
          <input onChange={(e) => setpost_title(e.target.value)} type="text" />

          <h1>Breve descrição do Post:</h1>
          <input onChange={(e) => setabout(e.target.value)} type="text" />

          <h1>Conteúdo do post:</h1>
          <textarea onChange={(e) => _setContent(e.target.value)}>
          </textarea>
          <Button onClick={() => setContent(_content)} style={{ position: 'fixed', bottom: '106px', left: '8px' }}>Ver Preview</Button>


        </Builder>
        <Preview>
          <>
            <SpacerTop multiplier={12} />
            <Image src={title_image} />

            <PostTitle>
              <p>{category}</p>
              <h1>{post_title}</h1>
            </PostTitle>

            <PostSubTiltle>
              <img src={author.photo} alt="poster" />
              <p className="name">Written by <a className="profile-link" href="/profile">{author.name}</a></p>
              <p className="date">{creation_date}</p>
            </PostSubTiltle>

            <Container>
              {parser(content)}
            </Container>

            <PostFooter>
              <FooterInfo>
                <div className="tags"><i className="fas fa-tags" />{tags}</div>
                <div className="share"><i className="fas fa-share-alt" />Share this post</div>
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
                    <h2>{related_posts.main.tag}</h2>
                    <h1>{related_posts.main.title}</h1>
                  </div>
                  <div className="alt">
                    <h2>{related_posts.alt.tag}</h2>
                    <h1>{related_posts.alt.title}</h1>
                  </div>
                </div>
              </RelatedPosts>
            </PostFooter>
          </>
        </Preview>
      </CreationPage>
      <div style={{ paddingRight: '16px ', display: 'flex', justifyContent: 'flex-end' }}>
        <Button as={Link} to='/'>Voltar</Button>
        <Button as={Link} to='/' onClick={() => submit({
          related_posts,
          title_image,
          tags,
          category,
          post_title,
          about,
          content,
        })}>salvar</Button>
      </div>
    </>
  )
}
