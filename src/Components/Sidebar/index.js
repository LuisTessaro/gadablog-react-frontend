import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import {
  GradientCard,
  SearchBox,
  Categories,
  HighestSeenPosts,
  Tags,
} from '../../Styles/Styled-Components/BlogPost'

import { LoadIcon } from '../../Styles/Styled-Components/Loader'


import indexToCategory from '../../Utils/indexToCategory'
import services from '../../Utils/services'

export default () => {
  const history = useHistory()
  const [categories, setCategories] = useState(null)
  const [higestSeen, setHigestSeen] = useState(null)
  const [featured, setFeatured] = useState(null)
  const [featureTags, setFeatureTags] = useState(null)

  const fetchCats = async () => {
    const { data } = await services.get('/api/info/categories/')
    setCategories(data)
  }

  const fetchHigestSeen = async () => {
    const { data } = await services.get('/api/info/posts/')
    setHigestSeen(data)
  }

  const fetchFeatured = async () => {
    const { data } = await services.get('/api/info/feature_post/')
    setFeatured(data)
  }

  useEffect(() => {
    fetchCats()
    fetchHigestSeen()
    fetchFeatured()
  }, [])

  return (
    <>
      <SearchBox>
        <input type="text" id="name" name="name" placeholder="Buscar por palavra" />
        <i className="fas fa-search" />
      </SearchBox>

      <Categories>
        <h1>Categorias</h1>
        <ul>
          {categories
            ?
            <>
              {Object.keys(categories).map((cat, i) => {
                return (
                  <li key={i}>
                    <Link to={{
                      pathname: `/category/${cat}`
                    }}>
                      {indexToCategory(cat)}
                    </Link>
                    <span>{categories[cat]}</span>
                  </li>
                )
              })}
            </>
            :
            <>
              <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
            </>
          }

        </ul>
      </Categories>

      <HighestSeenPosts>
        <h1>Postagens mais vistas</h1>
        <ul>
          {higestSeen
            ?
            <>
              {higestSeen.map((post, i) => {
                return (
                  <li key={i}>
                    <h1>{indexToCategory(post.category)}</h1>
                    {/* <a href={`/post/${post.url}`} >{post.post_title}</a> */}
                    {/* <p
                      onClick={() => {
                        history.push(`/post/${post.url}`)
                      }}
                    >
                      {post.post_title}
                    </p> */}
                    <Link to={`/post/${post.url}`}>
                      {post.post_title}
                    </Link>
                  </li>
                )
              })}
            </>
            :
            <>
              <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
            </>
          }
        </ul>
      </HighestSeenPosts>

      <GradientCard>
        {featured
          ?
          <>
            <h1>{featured.title}</h1>
            {featured.content.map((content, i) => <p key={i}>{content}</p>)}
            <a target="__blank" href={featured.link} className="button">Ir para o canal 	&#62;</a >
          </>
          :
          <>
            <LoadIcon speed='1s' size='2rem' className="fas fa-spinner" />
          </>
        }

      </GradientCard>

      <Tags>
        <h1>Tags</h1>

        <ul>
          {['Programação', 'Dicas', 'Musica', 'Jogos', 'Opniões'].map((tag, i, arr) => {
            return (
              <li key={i}>
                <Link
                  to={{
                    pathname: "/tags",
                    search: `?tag=${tag}`,
                  }}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </Tags>
    </>
  )
}