import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: rgb(0, 204, 255);
width: fit-content;
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${props => props.theme.body};
`
const Faq = () => {
  return (
    <Section>
        <Title> FAQ </Title>
    </Section>
  )
}

export default Faq