import styled from 'styled-components'

function App() {
    return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

export default App
