import styled from 'styled-components'
import { colors, spacers } from '../StyleGuide'

export default styled.div`
  p {
    font-size: 15px;
    color: ${colors.textColor};
    margin-bottom: ${spacers.margin};
  }
  
  img {
    width: 100%;
    margin-bottom: ${spacers.padding};
    margin-bottom: ${spacers.margin};
  }
  
  .feature-text {
    margin-bottom: ${spacers.margin};
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      border-left: 5px solid ${colors.main};
      padding: ${spacers.padding};
      font-size: 18px;
      font-weight: 900;
      color: #202945;
      width: 70%;
    }
  }
  
  .section-title {
    margin-bottom: ${spacers.margin};
    font-size: 20px;
    color: ${colors.textColor};
  }
  
  textarea {
    margin-bottom: ${spacers.margin};
    width: 100%;
    resize: none;
    background-color: #c1c1c1;
    padding: ${spacers.padding};
    color: ${colors.white};  
  }
  
  iframe {
    width: 100%;
    height: 400px;
    margin-bottom: ${spacers.margin};
  }
`
