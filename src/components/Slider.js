import React from 'react';
import styled from 'styled-components';
import slide1 from '../images/slide1.jpg';
import { Container } from 'react-bootstrap';

const Styled = styled.div`
.jumbo{
  background: url(${slide1}) no-repeat fixed bottom ;
  background-size: cover;
  color: #cfcfcf;
  height: 645px;
  text-align: center;
  postion: relative;
  z-index: -2;
  wigth : 102px;
  padding-top:50px;
 
}

.overlay{

    background-color: #af9a7d;;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:-1;
}

`;

export const Slider = () => (
    <Styled>
        <div fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1> Welcome To GAGOUM CONSULTING BANK</h1>
            </Container>
        </div>
    </Styled>
)
