import React from 'react'
import styled from 'styled-components'
import { style } from '../../Theme'
import { Button } from '../Button/Button'

export const ClassicBlock = (props) => {

    const {title, content, btnText} = props
    const { md } = style.shared.sizes.button
    return (
        <BlockContainer>
            <Title>{title}</Title>
            <Content>{content}</Content>
            <Button size={md}>{btnText}</Button>
        </BlockContainer>
    )
}

const BlockContainer = styled.article`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: start;
height: 100%;
padding:0 15px;
`

const Title = styled.h1`
    font-family: 'NotoSansJP-bold';
    font-size: 2.3rem;
    color: ${props => props.theme.secondary}
`

const Content = styled.p`
    font-family: 'Raleway-regular';

    color: ${props => props.theme.primary};
    letter-spacing: 1px;
`