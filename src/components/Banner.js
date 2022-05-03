import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Botton from './Botton'
import img1 from '../assets/Nfts/edit1.svg';
import img2 from '../assets/Nfts/MF.svg';
import img3 from '../assets/Nfts/bighead-3.svg';
import img4 from '../assets/Nfts/bighead-4.svg';
import img5 from '../assets/Nfts/bighead-5.svg';
import img6 from '../assets/Nfts/bighead-6.svg';
import { light } from '../styles/Themes';


const Section = styled.section`
width: 100vw;
height: 20rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;
`
const ImagenContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-content: center;

opacity: 0.2;

img{
    width: 13rem;
    height: auto;
}

`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index:10;
width: 35%;
text-transform: capitalize;

text-shadow: 10px 10px 2px ${props => props.theme.text};
`
const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;
font-size: ${props => props.theme.fontmd};

`

const JoinNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
online: none;
border: none;
font-weight: 600
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease; 
z-index:2;
//animacion de profundidad
&:hover{
    transform: scale(0.9);
}

//forma del botton 
&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transform: all 0.2s ease;

    
}
//borde
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;    
}
`
export const Banner = () => {
  return (
    <Section>
        
        <ImagenContainer>
            <img src={img1} alt='The weirdos' />
            <img src={img2} alt='The weirdos' />
            <img src={img3} alt='The weirdos' />
            <img src={img4} alt='The weirdos' />
            <img src={img5} alt='The weirdos' />
            <img src={img6} alt='The weirdos' />
        </ImagenContainer>
        <Title>Join the <br /> weirdos club</Title>
          
    <BtnContainer>
        
       <JoinNow>
            JoiNow!!!
       </JoinNow>
    </BtnContainer>  
       
        
    </Section>
  )
}
