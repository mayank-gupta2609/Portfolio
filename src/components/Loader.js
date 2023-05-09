import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
    return (
        <div style={{
            paddingLeft: '17px'
        }}>
            <div style={{ display: 'flex' }}>

                <Body>
                    <ImgLoader></ImgLoader>
                    <Title></Title>
                    <Lines></Lines>
                </Body>
                <Body>
                    <ImgLoader></ImgLoader>
                    <Title></Title>
                    <Lines></Lines>
                </Body>
                <Body>
                    <ImgLoader></ImgLoader>
                    <Title></Title>
                    <Lines></Lines>
                </Body>
            </div>


        </div>
    )
}

export default Loader;

const Loading = keyframes`
                    0% {opacity:0.3}
                    50% {opacity:0.9}
                    100% {opacity:0.3}
`;

const Body = styled.div`
    height:430px;
    width:400px;
    border:2px solid #E4FBFF;
    padding-top:5px;
    border-radius:10px;
    margin:10px 10px 0px 0px;
    
transition:0.25s ease-in-out;
animation-name:${Loading};
animation-duration:1.5s;
animation-iteration-count:infinite;
padding-bottom:10px
    
`;


const ImgLoader = styled.div`
    background-color:#E4FBFF;
width:380px;
height:230px;
margin:10px;
border-radius:8px; 
transition:0.25s ease-in-out;
animation-name:${Loading};
animation-duration:1.5s;
animation-iteration-count:infinite;
`;

const Lines = styled.div`
background-color:#E4FBFF;
width:380px;
height:50px;
margin:10px;
border-radius:8px; 
transition:0.25s ease-in-out;
animation-name:${Loading};
animation-duration:1.5s;
animation-iteration-count:infinite;
`;

const Title = styled.div`
    background-color:#E4FBFF;
width:380px;
height:120px;
margin:10px;
border-radius:8px; 
transition:0.25s ease-in-out;
animation-name:${Loading};
animation-duration:1.5s;
animation-iteration-count:infinite;
`;
