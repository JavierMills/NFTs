import React from 'react'
import styled from 'styled-components'
import { Banner } from './Banner'
import Logo from './Logo'
import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'


const Section = styled.section`
min-height: 100vh;
height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
// justify-content: center;
// align-items: center;
flex-direction: column;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto ;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};

`
const Left = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`
const IconsList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transform: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`


const Footer = () => {
  return (
    <Section>
      <Banner />
      <Container>
          <Left>
            <Logo />
            <IconsList>
            <a href='http://facebook.com' target='_blank' rel="noreferrer">
              <Facebook />
              </a>
              <a href='http://facebook.com' target='_blank' rel="noreferrer">
              <Twitter />
              </a>
              <a href='http://facebook.com' target='_blank' rel="noreferrer">
              <Instagram />
              </a>
              <a href='http://facebook.com' target='_blank' rel="noreferrer">
              <LinkedIn/>
              </a>
            </IconsList>
          </Left>
      </Container>

    </Section>
  )
}

export default Footer