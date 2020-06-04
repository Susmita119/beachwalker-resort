import styled from "styled-components";
import {
  setColor,
  setRem,
  setFont,
  setBorder,
  setLetterSpacing,
  setTransition,
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  font-size: ${setRem(18)};
  text-transform: capitalize;
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(37)};
  ${setBorder({ color: `${setColor.primaryColor}` })};
  letter-spacing: ${setLetterSpacing(3)};
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${(props) =>
    `margin:${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  text-decoration: none;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
