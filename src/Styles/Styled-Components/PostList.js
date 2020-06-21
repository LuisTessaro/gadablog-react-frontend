import styled from 'styled-components'

import { colors } from '../StyleGuide'

export default styled.ul`
  a {
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;


    text-decoration: none;

    cursor: pointer;

    color:gray;

    &:hover {
      i.fa-chevron-right {
        transform: translateX(10px);
      }
    }

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      object-fit: cover;
      width: 310px;
      height: 200px;
      min-width: 310px;
      min-height: 200px;
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
        overflow: auto;
        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #000050;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: ${colors.main};
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.mainDarken};
        }
      }
    }
    
  }
`