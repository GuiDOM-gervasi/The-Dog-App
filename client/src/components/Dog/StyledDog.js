import styled from "styled-components";

export const StyledDog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 18rem;
  background-color: #e2d0b6;
  border-radius: 0.2rem;

  .dogBody {
    margin-top: 0px !important;
    padding-top: 0px !important;
  }

  .dogBody a {
    text-decoration: none;
    color: rgb(65, 47, 27);
  }

  .lines {
    padding: 4px 4px;
    padding-top: 9.5px;
    border-top: 1px solid rgb(65, 47, 27);
    border-bottom: 1px solid rgb(65, 47, 27);
    width: 50%;
    img {
      width: 95%;
      height: 95%;
    }
  }
  .text {
    width: 60%;
    h5 {
      color: rgb(65, 47, 27);
      margin-bottom: 1px;
    }
    p {
      color: rgb(65, 47, 27);
      margin-top: 1.5px;
      font-size: 14px;
    }
  }
`;
