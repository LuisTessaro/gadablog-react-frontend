import styled from 'styled-components'

import {
  colors,
  spacers,
  fonts,
} from '../StyleGuide'

export const SpacerTop = styled.div`${props => {
  if (props.multiplier)
    return `margin-top: calc(4px * ${props.multiplier});`
}}`

export const BodyStyle = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  box-sizing: border-box;
  flex: 7;
  padding-right: calc(${spacers.padding} * 4);
  padding-bottom: calc(${spacers.padding} * 4);
  
  @media (max-width: 1200px) {
    padding-right: 0;
    padding-bottom: 0;
  }
`

export const SideContent = styled.div`
  min-width: 200px;
  box-sizing: border-box;
  flex: 3;
  padding-bottom: calc(${spacers.padding} * 4);
`

export const GradientCard = styled.div`
  margin-top: 32px;
  background-image: linear-gradient(to top right, ${colors.dark} 20%, ${colors.main});
  width: 100%;
  min-height: 375px;
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px;
  color: ${colors.white};
  padding: 16px;
  h1 {
    font-size: ${fonts.h1};
    margin-bottom: 28px;
  }
  p{
    padding-bottom: 8px;
  }
  .button {
    cursor: pointer;
    text-transform: uppercase;
    color: ${colors.success};
    font-weight: 700;
    margin-top: 28px;

    &:hover{
      text-decoration: underline;
    }
  }
`

export const SearchBox = styled.div`
  position: relative;
  margin-top: 48px;
  input{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 3px;
    border: none;
    padding: 16px;
    padding-right: 32px;
    margin: 0;
  }

  input:focus {
    box-shadow: none;
  }
  
  i {
    position: absolute;
    color: lightgray;
    top: 30%;
    right: 2%;
    font-size: 1.2rem;
  }
`

export const Categories = styled.div`
  margin-top: 32px;
  h1{
    color: ${colors.main};
    font-size: ${fonts.h1};
    font-weight: 700px;
    margin-bottom: ${spacers.margin};
  }
  ul {
    width:100%;
    li{
      display: flex;
      width:100%;
      align-items: center;
      justify-content: space-between;
      padding-bottom: ${spacers.padding};
      padding-top: ${spacers.padding};
      border-bottom: 1px solid lightgray;

      &:last-child {
        border: none;
      }

      a {
        font-weight: 500;
        font-size: 16px;
        color: #6e7795;
        font-style: italic;
        cursor: pointer;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }

      span {
        color: ${colors.white};
        background-color: ${colors.main};
        border-radius: 30%;
        padding: 6px;
        min-width: 30px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
`

export const HighestSeenPosts = styled.div`
  margin-top: 32px;
  h1{
    color: ${colors.main};
    font-size: ${fonts.h1};
    font-weight: 700px;
    margin-bottom: ${spacers.margin};
  }
  ul {
    width:100%;

    li{
      display: flex;
      flex-direction: column;
      width:100%;
      align-items: flex-start;
      padding-bottom: ${spacers.padding};
      padding-top: ${spacers.padding};
      border-bottom: 1px solid lightgray;

      &:last-child {
        border: none;
      }

      h1 {
        color: #6e7795;
        font-size: 13px;
      }

      a {
        font-weight: 500;
        font-size: 16px;
        color: #6e7795;
        line-height: calc(16px * 1.5);
        cursor: pointer;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const Tags = styled.div`
  margin-top: 32px;
  h1 {
    color: ${colors.main};
    font-size: ${fonts.h1};
    font-weight: 700px;
    margin-bottom: ${spacers.margin};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      a {
        padding-right: ${spacers.padding};
        padding-bottom: ${spacers.padding};
        color: #c1c1c1;
        font-size: 14px;
        cursor: pointer;
        text-decoration:none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const Image = styled.img`
  width: 100%;
  margin-bottom: ${spacers.padding};
`

export const PostTitle = styled.div`
  p {
    color: ${colors.main};
    font-weight: 700;
    margin-bottom ${spacers.margin};
  }

  h1 {
    font-size: 32px;
    color: ${colors.dark};
  }
`

export const PostSubTiltle = styled.div`
  padding: ${spacers.padding} 0;

  display: flex;
  align-items: center;
 
  img {
    border: 1px solid black;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    background-color: lightgray;
    margin-right: calc(${spacers.margin} / 4);
  }

  .name { 
    margin-right: calc(${spacers.margin} / 4);
    a.profile-link{
      color: #0F7FCF;
    }
  }

  div {
    display: flex;
  }

  .date{
    margin-right: calc(${spacers.margin} / 4);
  }

  .comments{
    margin-right: calc(${spacers.margin} / 4);
    color: #0F7FCF;
    i{
      margin-right: 4px;
    }
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
    }
  }
`

export const PostFooter = styled.div`

`

export const FooterInfo = styled.div`
  margin-bottom: ${spacers.margin};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .tags {
    color: ${colors.main};
    font-weight: 500;
    i{
      padding-right: 5px;
    }
  }
  .share {
    font-weight: 500;
    p {
      padding-bottom: 16px;
      text-align: right;
    }
    color: ${colors.dark};
    i {
      padding-right: 5px;
    }
    
    .links {
      button {
        margin-left: 8px;
        @media (max-width: 768px) {
          margin: 0;
          margin-right: 8px;
        }
      }
    }
    
  }
  @media (max-width: 768px) {
    .share {
      p {
        text-align: left;
      }
    }
    display: flex;
    flex-direction: column;
    .tags {
      margin-bottom: 16px;
    }
    .share {
      margin-bottom: 16px;
    }
  }
`

export const Author = styled.div`
  display: flex;
  margin-bottom: ${spacers.margin};
  img {
    height: 120px;
    width: 120px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: ${spacers.padding};

    h1 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    h5 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      padding-bottom: 5px;
    }
  }
`

export const RelatedPosts = styled.div`
  h1 {
    color: ${colors.main};
    font-size: 22px;
    margin-bottom: ${spacers.margin};
  }
  
  .post-list {
    display: flex;
    justify-content: space-between;
    aling-items: center;

    box-sizing: border-box;
    margin-top: 32px;

    @media (max-width: 1200px) {
      flex-direction: column;
    }

    .main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      aling-items: center;
      box-sizing: border-box;

      background-color: ${colors.main};
      border-radius: 6px;
      padding: 16px 32px;

      flex: 5;

      margin-right: 32px;

      @media (max-width: 1200px) {
        margin-right: 0;
        margin-bottom: 16px;
      }

      h2{
        color: ${colors.white};
        font-size: 16px;
        padding-top: 26px;
        padding-bottom: 10px;
        font-weight: 700;
      }
      h1 {
        color: ${colors.white};
        padding-bottom: 10px;
        font-weight: 700;
      }
    }
  
    .alt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      aling-items: center;
      box-sizing: border-box;
      flex: 5;

      // background-color: ${colors.dark};
      border: 1px solid lightgray;
      border-radius: 6px;
      padding: 16px 32px;

      h2{
        color: gray;
        font-size: 16px;
        padding-top: 26px;
        padding-bottom: 10px;
        font-weight: 700;
      }
      h1 {
        color: #202945;
        padding-bottom: 10px;
        font-weight: 700;
      }
    }
  }  
`

export const Tag = styled.a`
  color: ${colors.main};

  &:hover {
    text-decoration: underline;
  }
`