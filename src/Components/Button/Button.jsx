import styled from "styled-components";
import { style } from "../../Theme"

export const Button = (props) => {
    return <StyledButton color={props.color} size={props.size}> {props.children}</StyledButton>
}

const StyledButton = styled.button`
    background: ${props => props.color ? props.color : props.theme.primary};
    padding: ${props => props.size};
    font-size: 1.2rem ;
    color: ${style.shared.colors.white};
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 200ms all ease-in;

    &:hover{
        background: ${props => props.theme.secondary};
    }
`