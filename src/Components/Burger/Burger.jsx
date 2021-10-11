import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import { style } from '../../Theme'

export const Burger = (props) => {
    const [opened, setOpened] = useState(null)

    return (
        <BurgerWrapper onClick={() => {
          opened == null ? setOpened(true) : setOpened(!opened)
          props.toggleShow(!props.show)
          }}>
            <Bar opened={opened} />
            <Bar opened={opened} />
            <Bar opened={opened} />
        </BurgerWrapper>
    )
}
const openAnimation1 = keyframes`
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, 11px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 11px, 0) rotate(45deg);
  }
`
const openAnimation2 = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
      transform: scale(0);
    opacity: 0;
  }
`
const openAnimation3 = keyframes`
    0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
      50% {
        transform: translate3d(0, -11px, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(0, -11px, 0) rotate(135deg);
      }
`

const closeAnimation1 = keyframes`
  0% {
    transform: translate3d(0, 11px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 11px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
`
const closeAnimation2 = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
      transform: scale(1);
    opacity: 1;
  }
`
const closeAnimation3 = keyframes`
    0% {
        transform: translate3d(0, -11px, 0) rotate(135deg);
      }
      50% {
        transform: translate3d(0, -11px, 0) rotate(0deg);
      }
      100% {
        transform: translate3d(0, 0, 0) rotate(0deg);
      }
`
const BurgerWrapper = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    

`
const Bar = styled.div`
    height: 4px;
    background: ${style.shared.colors.white};
    border-radius: 5px;
    

    &:nth-child(1){
        animation-name: ${props => (props.opened === null ? '' : props.opened ? openAnimation1 : closeAnimation1)};
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
    }

    &:nth-child(2){
        animation-name: ${props =>(props.opened === null ? '' : props.opened ? openAnimation2 : closeAnimation2)};
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
    }
    &:nth-child(3){
        animation-name: ${props =>(props.opened === null ? '' : props.opened ? openAnimation3 : closeAnimation3)};
        animation-duration: 0.8s;
        animation-fill-mode: forwards;
    }
`