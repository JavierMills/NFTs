import React from 'react'
import styled from 'styled-components';
import LogoText from '../components/Logo';
import Botton from './Botton';

const Seccion = styled.section`
width: 100vw; 
background-color: ${props => props.theme.body};
` 
const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

width: 85%;
height: ${props => props.theme.navHeight};
margin: 0 auto;
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items:  center;
list-style: none;

`

const MenuItem =  styled.li`
margin: 0 1rem;
color: ${props => props.theme.text};
cursor: pointer;

//efecto after de la linea de abajo de cada item determiba el efecto que tendra el line de los items 
&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
  
}
`


const Navigation = () => {
  return (
    <Seccion>
      <NavBar>
      <LogoText />
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>RoadMap</MenuItem>
        <MenuItem>Showcase</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>Faq</MenuItem>
      </Menu>
        <Botton text= "Connect Wallet" link="https://google.com" /> 
      </NavBar>  
    </Seccion>
  )
}
 
export default Navigation;