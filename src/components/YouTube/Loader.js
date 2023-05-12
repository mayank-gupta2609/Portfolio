import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
    return (
        <div  >
            <Cardsection >
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
                <VideoCard>
                    <Img />
                    <VideoInfo>

                        <div style={{
                            marginLeft: '8px'
                        }}>

                            <VideoTitle> </VideoTitle>
                            <ChannelName> </ChannelName>
                        </div>
                    </VideoInfo>
                </VideoCard>
            </Cardsection>


        </div>
    )
}

export default Loader;

const Cardsection = styled.div`
    padding-left:17px;
    display:grid; 
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 400px 2 10px; 
    column-gap: 310px;
    row-gap: 3px;
    margin-top:10px;  
    height:674px;
    border-radius:0px 0px 10px 10px;
    overflow:hidden;  
    
`;

const VideoCard = styled.div`
    height:320px;
    width:395px; 
    margin:6px;
    border-radius:10px;
    overflow:hidden; 
    border:1px solid #20262E;
    margin-right:9px;
`;

const Img = styled.div`
     width:400px; 
     border-radius:0px 0px 10px 10px;
     height:225px;
     background-color:rgb(82 88 89);
`;

const VideoInfo = styled.div`
    display:flex;
    margin-top:5px;
`;


const VideoTitle = styled.div`
    color:white;
    font-size:23px; 
    font-weight:350; 
    background-color:rgb(82 88 89);
    height:50px;
    width:320px;
    border-radius:5px;
`;

const ChannelName = styled.div` 
    color:white;
    font-weight:20;
    font-size:16px;
    color:#cfcfcf;
    background-color:rgb(82 88 89);
    height:25px;
    width:180px;
    border-radius:5px;
    margin-top:7px;
`;