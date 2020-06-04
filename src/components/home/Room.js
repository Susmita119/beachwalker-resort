import React from "react";
import { SmallBtn } from "../globals/Buttons";
import {
  setRem,
  setLetterSpacing,
  setShadow,
  setColor,
  setBorder,
  setTransition,
} from "../../styles";
import PropTypes from "prop-types";
import styled from "styled-components";
const Room = ({ className, room }) => {
  const { img = "", title = "", info = "", price = 0 } = room;
  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="single room" />
        <div className="price">${price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>View</SmallBtn>
      </div>
    </article>
  );
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover {
      opacity: 0.8;
    }
    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      letter-spacing: ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }
    &:hover .price {
      opacity: 1;
    }
  }
  .room-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      letter-spacing: ${setLetterSpacing()};
    }
    p {
      letter-spacing: ${setLetterSpacing()};
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.darkest};
  }
`;

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
