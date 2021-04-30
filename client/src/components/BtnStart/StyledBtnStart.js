import styled from "styled-components";

export const StyledBtnStart = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${({ img }) => img});

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 6rem 3rem;
    width: 30%;
    height: 15rem;
    background-color: rgba(170, 190, 191,0.3);
    opacity: 10;
    border-radius: 6px;
    border-top: 4px solid rgb(120, 162, 194, 0.7);
    box-shadow: 0px 3px 26px #00000045;
    h5 {
      margin: 0;
      font-size: 2rem;
      border-bottom: solid rgb(160, 131, 99);
    }
    p {
      width: 75%;
    }
    button {
      margin: auto;
      width: 6rem;
      height: 3rem;
      border: 0;
      background-color: rgb(160, 131, 99);
      color: white;
      border-radius: 0.2rem;
      font-size: 0.9rem;
      cursor: pointer;
      &:hover {
        background-color: #856d52;
      }
    }
  }
  @media (max-width: 970px) {
    .about {
      justify-content: center;
      margin: 0.5rem 3rem;
      height: 10rem;
      width: 60%;
      h5 {
        display: none;
      }
      p {
        width: 90%;
      }
      button {
        margin-bottom: 1rem;
        width: 5rem;
        height: 2rem;
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 490px) {
    .about {
      height: 9.5rem;
      width: 85%;
      font-size: 13px;
    }
  }
`;
