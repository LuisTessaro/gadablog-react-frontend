import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  GradientCard,
  SearchBox,
  Categories,
  HighestSeenPosts,
  Tags,
} from '../../Styles/Styled-Components/BlogPost'

import indexToCategory from '../../Utils/indexToCategory'
import services from '../../Utils/services'

export default () => {
  const [categories, setCategories] = useState(null)
  const [higestSeen, setHigestSeen] = useState(null)
  const [featured, setFeatured] = useState(null)
  const [featureTags, setFeatureTags] = useState(null)

  const fetchInfos = () => {
    const requests = []
    
  }

  useEffect(() => {
    fetchInfos()
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
          <li><p>Gaems</p><span>13</span></li>
          <li><p>Programação</p><span>5</span></li>
          <li><p>Shit Post</p><span>7</span></li>
          <li><p>Memes</p><span>8</span></li>
          <li><p>Hot Takes</p><span>99</span></li>
          <li><p>Opnião</p><span>2</span></li>
        </ul>
      </Categories>

      <HighestSeenPosts>
        <h1>Postagens mais vistas</h1>
        <ul>
          <li>
            <h1>Gaems</h1>
            <p>SangueBom - Como jogar Stellaris</p>
          </li>
          <li>
            <h1>Memes</h1>
            <p>MoltenBrain - Conheça o maior reclamção da história</p>
          </li>
          <li>
            <h1>Shit Post</h1>
            <p>Catagra - Leiam esse manga agora mesmo</p>
          </li>
          <li>
            <h1>Programação</h1>
            <p>Hails - Como usar o debugger no VsCode</p>
          </li>
        </ul>
      </HighestSeenPosts>

      <GradientCard>
        <h1>Conheça o nosso cantor: Fukumoto</h1>
        <p>O mestre da Wonderwall</p>
        <p>Gameplays de Valorant</p>
        <p>Sugação o dia todo</p>
        <div className="button">Ir para o canal 	&#62;</div >
      </GradientCard>

      <Tags>
        <h1>Tags</h1>
        <ul>
          <li><p>Gaems</p></li>
          <li><p>Programação</p></li>
          <li><p>Shit Post</p></li>
          <li><p>Memes</p></li>
          <li><p>Hot Takes</p></li>
          <li><p>Opnião</p></li>
        </ul>
      </Tags>
    </>
  )
}