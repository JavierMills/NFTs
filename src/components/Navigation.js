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
const HmbuergerMenu = styled.div`
width: 1.5rem;
height: 2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: translateX(-50);
display: flex;
justify-content: center;
align-content: center;



//se usa junto con los pseudo-elementos :before y :after para generar contenido
// que se adjunta antes o después de un selector CSS.
&::after, &::before{
  content: ' ';
  width: 1.5rem;
  height: 2px;
  background: ${props => props.theme.text};
  position: absolute;
}
&::after{
  top:0.5rem;
}
&::before{
  bottom:0.5rem;
}
`

const Navigation = () => {

    const ScrollTo = (id) =>{
      let element= document.getElementById(id);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }

  return (
    <Seccion id='navigation'>
      <NavBar>
      <LogoText />
      <HmbuergerMenu>
        &nbsp;
      </HmbuergerMenu>
      <Menu>
       <MenuItem onClick={() => ScrollTo('home')}>Home</MenuItem>
       <MenuItem onClick={() => ScrollTo('about')}>About</MenuItem>
       <MenuItem onClick={() => ScrollTo('roadmap')}>RoadMap</MenuItem>
       <MenuItem onClick={() => ScrollTo('showcase')}>Showcase</MenuItem>
       <MenuItem onClick={() => ScrollTo('team')}>Team</MenuItem>
       <MenuItem onClick={() => ScrollTo('faq')}>Faq</MenuItem>
      </Menu>
        <Botton text= "Connect Wallet" link="https://google.com" /> 
      </NavBar>  
    </Seccion>
  )
}
 
export default Navigation;