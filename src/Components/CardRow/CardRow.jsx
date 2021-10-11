import React from 'react'
import { Card } from '../Card/Card'
import styled from 'styled-components'


export const CardRow = ({row}) => {
    return (
        <StyledRow>
            {row.map(h => <Card sound={h.sound} character={h.character} />)}
        </StyledRow>
    )
}

const StyledRow = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-around;
min-width: 620px;
`