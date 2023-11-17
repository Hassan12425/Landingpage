import styled, { keyframes } from "styled-components";
import {Row, Image} from "react-bootstrap";
import {themeList} from "../../contexts/ThemeContext/themeList";
import { AnimationOnScroll } from 'react-animation-on-scroll';
//About
export const RowReversedStyled = styled(Row)`
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

//Sponsors
export const GrayImage = styled(Image)`
  transition: all 0.5s;
  cursor: pointer;
  filter: grayscale(100);
  @media (max-width: 991px) {
    padding: 10px 0;
  }
  &:hover {
    filter: grayscale(0);
    transform: scale(1.3);
  }
`;
const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedContainer = styled(AnimationOnScroll)`
  animation: ${fadeInUpAnimation} 1s ease-in-out;
`;

export const Container = styled.div`

`;

export const CardItemStyled = styled.div`
  transition: all 0.5s;
  text-align: start;
  margin-right: 24px;
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
// card Styling
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
 justify-content: space-between;

`;
export const StyledCol = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  

`;