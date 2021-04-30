import styled from "styled-components";

export const StyledNav = styled.header`
  height: 56px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(160, 131, 99);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid white;
  box-shadow: 0px 3px 5px #00000040;
  .list {
    margin:0;
    list-style: none;
    height: 55px;
    width: 10rem;
    .listitem {
      display:flex;
      height: inherit;
      justify-content: space-between;
      .listitema {
        width: 5rem;
        height: inherit;
        display: flex;
        justify-content: center;
        align-items:center;
        color: white;
        font-weight: 500;
        text-decoration: none;
        &:hover {
          background-color: #856d52;
          transition: ease 0.5s;
          height: inherit;
          margin-top: 0;
        }
      }
    }
  }
`;
