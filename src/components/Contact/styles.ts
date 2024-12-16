import styled from "styled-components";


export const Container = styled.section`
  margin-top: 20rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    place-items: center;
    margin-top: 8rem;
    .link-tag{
      color: var(--black);
      font-weight: 500;
      color: #000;
      &:hover{
          color: #FFF;
      }
      width: 100%;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 2rem;
        background-color: var(--green);
        border-radius: 1.4rem;
        padding: 1.6rem 2.8rem;
        transition: background-color 0.25s;
        svg{
          width: 3.5rem;
        }
        
        &:hover{
          background-color: var(--pink);
          path{
            fill: #fff;
          }
        }
        
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      .link-tag{
        width: 100%;
        flex-direction: column;
      }
    }
  }
  
`