import styled from "styled-components";
import {themeList} from "../../contexts/ThemeContext/themeList";

export const SectionContainerStyled = styled.section`
  transition: all 0.5s;
  background-color: ${({theme: {theme}}) =>
    theme === themeList.light ? "var(--ds-light-0)" : "var(--ds-dark-4)"};
`;
export const CardItemStyled = styled.div`
  transition: all 0.5s;
  width: 350px;
  text-align: center;
margin-left: auto;
margin-right: auto;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: var(--ds-blood);
    .card-icon-square {
      background-color: var(--ds-light-0);
      svg {
        color: var(--ds-blood);
        transform: scale(1.2);
      }
    }
    .card-num,
    h4,
    p {
      color: var(--ds-light-0);
    }
  }
  .card-num {
    transition: all 0.5s;
    color: var(--ds-blood);
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .card-icon-square {
    transition: all 0.5s;
    margin-bottom: 15px;
    width: 60px;
    height: 60px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--ds-blood);
    z-index: 2;
    position: relative;
    svg {
      transition: all 0.5s;
      font-size: 28px;
      color: var(--ds-light-0);
    }
  }
  h4 {
    transition: all 0.5s;
    color: ${({theme: {theme}}) =>
      themeList.light === theme ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
    font-weight: 600;
  }
  p {
    transition: all 0.5s;
    color: var(--ds-light-1);
  }
`;
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
 justify-content: space-between;
 align-items: center;
`;

// section

export const SectionHeadStyled = styled.div`
  position: relative;
  padding: 16px 0px;
  text-align: center;
  .back-head {
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-light-2)" :"var(--ds-dark-3)"};
    transition: all 0.5s;
    font-size: 50px;
    font-weight: 800;
    text-transform: uppercase;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .sec-head {
    transition: all 0.5s;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({theme: {theme}}) =>
      theme === themeList.light ? "var(--ds-dark-3)" : "var(--ds-light-2)"};
    z-index: 3;
    position: relative;
  }
`;


