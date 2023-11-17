import styled, { keyframes } from 'styled-components';
import {themeList} from "../../contexts/ThemeContext/themeList";

export const TeamCardStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding: 20px;
  .team-member-info {
    h3 {
      font-weight: 700;
      font-size: 18px;
      font-family: "Raleway", "sans-serif";
      color: ${({theme: {theme}}) =>
        theme === themeList.light ? "var(--ds-dark-1)" : "var(--ds-light-0)"};
    }
    h4 {
      font-size: 13px;
      font-style: italic;
    }
    p {
      font-size: 13px;
      font-weight: 400;
      font-style: italic;
      letter-spacing: 0.1px;
      color: var(--ds-light-1);
    }
  }
  .team-social {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    max-width: 140px;
    li {
      svg {
        transition: all 0.5s;
        font-size: 24px;
        cursor: pointer;
        color: var(--ds-light-1);
        &:hover {
          color: var(--ds-blood);
        }
      }
    }
  }
`;



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
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Create styled component using animations
export const AnimatedDiv = styled.div`
  animation: ${({ idx }) => (idx === 1 ? fadeInDown : fadeInUp)} 1s ease-in-out;
`;

export const StyledImage = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  
`;
