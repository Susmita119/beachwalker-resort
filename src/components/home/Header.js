import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";
const Header = () => {
  return (
    <div>
      <Hero img={homeImg}>
        <Banner
          greeting="Welcome to"
          title="beachwalk resort"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et, eum eos modi aliquam expedita"
        >
          <PrimaryBtn t="2rem">View details</PrimaryBtn>
          {/* <PrimaryBtn t="2rem" as="a" href="https://www.google.com/">
            View details
          </PrimaryBtn> */}
        </Banner>
      </Hero>
    </div>
  );
};

export default Header;
