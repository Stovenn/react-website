import styled from 'styled-components'
import { style } from '../../Theme'

export const Hero = ({subcomponent}) => {

    return (
        <Container>
            <Block>
                {subcomponent()}
            </Block>
            <Block>
                {subcomponent()}
            </Block>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    position: relative;
    justify-content:center;
`

const Block = styled.div`
    width: 40%;
    height: 300px;
    background-color: ${style.shared.colors.black_light_30};
`
