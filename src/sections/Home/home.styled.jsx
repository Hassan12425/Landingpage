import styled,{keyframes} from "styled-components";

export const HomeSectionStyled = styled.section`
  @media (max-width: 767px) {
    text-align: center;
  }
  color: #fff;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
  .home-container {
    z-index: 3;
    h1 {
      font-size: 50px;
      font-weight: 700;
    }
    h2 {
      color: #eee;
      font-family: "Raleway", sans-serif;
      font-size: 25px;
      margin-bottom: 30px;
    }
  }
`;
// Define the keyframes for the animation
export const lightSpeedInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// Styled component with the animation
export const AnimatedComponent = styled.div`
/* margin-left: 20px; */
  animation: ${lightSpeedInLeft} 1s ease; 
`;
