import React from "react";
import styled from "styled-components";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setLetterSpacing,
  setBorder,
  setColor,
  media,
  setFont,
} from "../../styles";
import { PrimaryBtn, SmallBtn } from "../globals/Buttons";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="About us" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut odio
            omnis laudantium assumenda similique magnam illo eos cupiditate
            veniam ducimus, eligendi exercitationem ad dolorum, laborum
            aspernatur corrupti voluptates dicta perspiciatis!
          </p>
          <PrimaryBtn t="1rem">Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  /* .about-img,
  .about-info {
    padding: ${setRem(30)};
  } */
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      letter-spacing: ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;

  ${media.desktop`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  width:100vw;
  max-width:1170px;
   display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:${setRem(32)};
    .about-img,.about-info{
      align-self:center;
    }
    .about-info{
      p{
        width:80%;
      }
    }
  `}
`;

export default About;
