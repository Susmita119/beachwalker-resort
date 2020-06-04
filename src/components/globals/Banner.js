import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../styles";

const fadeIn = (start, point, end) => {
  const animate = keyframes`
0%{
    opacity : 0;
    transform : translateY(${start})
}
50%{
    opacity : 0.5;
    transform : translateY(${point})
}
100%{
    opacity : 1;
    transform : translateY(${end})
}
`;
  return css`
    animation: ${animate} 3s ease-in-out;
  `;
};

const Banner = ({ className, title, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  /*setRem*/
  letter-spacing: ${setLetterSpacing(3)};
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: 48px;
    color: ${setColor.primaryColor};
    span {
      color: ${setColor.mainWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet`
  width: 70vw;
    ${setBorder({
      width: "6px",
      style: "solid",
      color: `${setColor.primaryColor}`,
    })};
    p {
      width: 75%;
    }  
  `}

  h1 {
    ${fadeIn("100%", "-100%", "0")}
  }
  .info {
    ${fadeIn("-100%", "100%", "0")}
  }
`;

export default BannerWrapper;