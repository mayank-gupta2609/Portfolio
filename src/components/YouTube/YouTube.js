import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import './index.css'
import Loader from '../YouTube/Loader'
import { useState } from 'react'
import Player from './Player'

const YouTube = () => {

    const topics = [{ name: "React JS", icon: 'fa-solid fa-code' }, { name: "Angular", icon: 'fa-solid fa-code' }, { name: "Sonny Sangha", icon: 'fa-solid fa-code' }, { name: "Code With Harry", icon: 'fa-solid fa-code' }, { name: "UEFA", icon: "fa-solid fa-futbol" }, { name: "UCL", icon: "fa-solid fa-futbol" }, { name: "Premiere League", icon: "fa-solid fa-futbol" }, { name: "Bundesliga", icon: "fa-solid fa-futbol" }, { name: "LaLiga Santader", icon: "fa-solid fa-futbol" }, { name: "WWE", icon: "fa-solid fa-dumbbell" }, { name: "KIANO7 HD", icon: "fa-solid fa-futbol" }]
    const [loading, setLoading] = useState(true)
    const [request, setRequest] = useState("KIANO7HD")
    const [videos, setVideos] = useState([])
    const [channelId, setChannelId] = useState("")
    const [videoUrl, setViUrl] = useState("")

    const fetchVideos = async () => {
        setLoading(true)
        const url = `https://youtube-v31.p.rapidapi.com/search?q=${request}&part=snippet%2Cid&regionCode=IN&maxResults=50`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3a3d136566msh9860fc83fced19dp1e2420jsn548c1cffb434',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setVideos(result.items)
            console.log(result.items[0]);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        fetchVideos()
    }, [request])

    return (
        <Container>
            <Body>

                <Sidebar>
                    <Brand> YouTube</Brand>
                    {topics.map((topic) => {
                        return <Options key={topic.name} onClick={() => { setRequest(topic.name) }}> <i className={topic.icon} style={{
                            marginRight: '16px'
                        }}></i> {topic.name}</Options>
                    })}
                </Sidebar>

                <Content>
                    <Top>

                        <Search>
                            <form onSubmit={(e) => {
                                e.preventDefault()

                            }}>

                                <Input onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        setRequest(e.target.value)
                                    }
                                }}></Input>
                                <i className="fa-solid fa-magnifying-glass icon"></i>
                            </form>
                        </Search>
                    </Top>
                    {loading && <Loader></Loader>}
                    {!loading && <Cardsection>
                        {videos.map(video => {
                            {
                                if (video.id.kind === "youtube#channel") {
                                    return <ChannelCard>
                                        <img src={video.snippet.thumbnails.medium.url} height="180px" width="180px" alt="" style={{
                                            borderRadius: '50%',
                                            cursor: 'pointer'
                                        }} />
                                        {video.snippet.channelTitle}
                                    </ChannelCard>
                                } else return <VideoCard onClick={() => {
                                    setViUrl(video.id.videoId)
                                    setChannelId(video.snippet.channelId)
                                    console.log(videoUrl)
                                }}>

                                    <div style={{
                                        height: '225px',
                                        width: '400px',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        alignItems: 'center'

                                    }}>

                                        <Img src={video.snippet.thumbnails.high.url} alt="" />
                                    </div>
                                    <VideoInfo>

                                        <div style={{

                                        }}>

                                            <VideoTitle>{video.snippet.title.length > 60 ? video.snippet.title.substr(0, 60).concat("...") : video.snippet.title}</VideoTitle>
                                            <ChannelName>{video.snippet.channelTitle}</ChannelName>
                                        </div>
                                    </VideoInfo>
                                </VideoCard>
                            }
                        })}



                    </Cardsection>}
                    {videoUrl?.length > 0 && <Player id={videoUrl} channelId={channelId} setViUrl={setViUrl} ></Player>}
                </Content>
            </Body>
        </Container>
    )
}

export default YouTube

const Container = styled.div`
    width:100vw;
    height:100vh; 
    box-sizing: border-box;
    padding:5px;
    background-color:#20262E;
    overflow: hidden;
`;

const Body = styled.div`
    height:100%;
    width:100%; 
    display:flex;
    justify-content: space-between;
`;

const Sidebar = styled.div`
    height:99.9%;
    width:270px; 
    background-color:#1A1C20;
    border-radius:10px;
`;

const Content = styled.div`
     height:100%;
     width:100%;
     background-color:#1A1C20;
     margin-left:5px;
     border-radius:10px;
     
     
`;

const Options = styled.div`
    border:1px solid #222831;
    font-family:'Roboto', sans-serif;
    font-size:20px;
    font-weight:30;
    padding:10px 2px 10px 10px;
    margin:2px;
    border-radius:5px; 
    color:whitesmoke;
    display:flex;
    align-items:center; 
    :hover{
        background-color:#20262E;
    }
`;

const Brand = styled.div`
    font-size:45px;
    margin:4px;
    box-sizing: border-box; 
    padding:1px;
    font-weight:400;
    color:white;
    text-align:center;

`;

const Search = styled.div` 
    width:45%;
    display:flex;
    color:white;
    align-items: center;
    font-size:30px;
    justify-content: space-center; 
    border-radius:26px; 
    border:2px solid #20262E;
`;

const Top = styled.div` 
    display:flex;
    justify-content: center;
    padding:10px 0px 0px 0px
`;

const Input = styled.input`
    height:40px;
    width:500px; 
    border-radius:20px 0px 0px 20px;
    outline:none;
    font-size:22px;
    padding-left:10px;
    border:0px; 
`;

const Cardsection = styled.div`
    padding-left:17px;
    display:grid; 
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 400px 2 10px; 
    column-gap: 310px;
    row-gap: 3px;
    margin-top:10px;  
    height:92.6%;
    border-radius:0px 0px 10px 10px;
    overflow:scroll; 
    
`;

const VideoCard = styled.div`
    height:320px;
    width:395px; 
    margin:6px;
    border-radius:10px;
    overflow:hidden; 
    border:1px solid #20262E;
`;

const Img = styled.img`
     height:300px;
     border-radius:0px 0px 10px 10px; 
     width:100%; 
     display:flex;
    align-items: center;
`;

const VideoInfo = styled.div`
    display:flex;
    margin-top:5px;
`;

const ChannelLogo = styled.div` 
`;

const VideoTitle = styled.div`
    color:white;
    font-size:18px; 
    font-weight:382;
    margin-left:10px;
    height:47px
`;

const ChannelName = styled.div`
    margin-left:10px;
    color:white;
    font-weight:20;
    font-size:14px;
    color:#cfcfcf;
    bottom:0px;
    margin-top:10px;
`;

const ChannelCard = styled.div`
    height:320px;
    width:395px; 
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center; 
    color:white;
    font-size:30px;
    box-sizing: border-box;
`;

