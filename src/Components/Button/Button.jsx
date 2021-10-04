import styled from "styled-components";
import { theme } from "../../Theme"

export const Button = styled.button`
    background: ${theme.primary};
    padding: ${theme.md};
    font-size: 1.2rem ;
    color: ${theme.white};
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 200ms all ease-in;

    &:hover{
        background: ${theme.secondary};
    }
`