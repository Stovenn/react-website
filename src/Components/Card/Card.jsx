import React from "react";
import styled, { css } from "styled-components";
import { style } from "../../Theme";

export const Card = ({ sound, character }) => {
  const flipCard = (e) => {
    e.currentTarget.classList.toggle("flipped");
  };

  return (
    <CardWrapper onClick={(e) => flipCard(e)}>
      <Recto>{sound}</Recto>
      <Verso>{character}</Verso>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 200px;
  height: 300px;
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: 0.3s;

  &:focus,
  &:hover {
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
  }

  &.flipped {
    & > div:first-of-type {
      transform: perspective(1000px) rotateY(-180deg);
    }

    & > div:last-of-type {
      transform: perspective(1000px) rotateY(0deg);
    }
  }

  @media only screen and (max-width: 1250px){
    width: 160px;
    height: 240px;
  }
  @media only screen and (max-width: 1000px){
    width: 120px;
    height: 180px;
  }
`;

const CardBody = css`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 5px;

  transition: all 0.25s ease-in-out;
  font-family: NotoSansJP-regular;
  font-size: 3rem;
`;

const Recto = styled.div`
  ${CardBody};
  background: #177e89;
  color: ${style.shared.colors.white};
`;

const Verso = styled.div`
  ${CardBody};
  background: #aa6da3;
  color: ${style.shared.colors.white};
  transform: rotateY(-180deg);
`;
