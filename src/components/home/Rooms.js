import React, { Component } from "react";
import Room from "./Room";
import Title from "../globals/Title";
import Section from "../globals/Section";
import { setColor, media, setRem } from "../../styles";
import rooms from "./rooms-data";
import styled from "styled-components";
export default class Rooms extends Component {
  state = {
    rooms: rooms,
  };

  render() {
    console.log(this.state.rooms);
    return (
      <Section color={setColor.lightGrey}>
        <Title title="Our Rooms" center />
        <RoomsCenter>
          {this.state.rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </RoomsCenter>
      </Section>
    );
  }
}
/* background: ${setColor.primaryColor}; */
const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
   ${media.large`
    width:100vw;
    max-width:1170px;
  `};
  
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(360px,1fr));
  grid-column-gap:${setRem(45)};

  /* ${media.tablet`
  display : grid;
  grid-template-columns : 1fr 1fr;
  grid-column-gap:${setRem(32)};
  `}; 
  ${media.large`
    grid-template-columns : repeat(3,1fr);
  `}; */
`;
