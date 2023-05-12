import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Player = ({ id, channelId, setViUrl }) => {

    const [vids, setVids] = useState([])
    const [vidtitle, setVidTitle] = useState("")
    const [vidchannel, setVidChannel] = useState("")
    const [viddesc, setViddesc] = useState("")
    const [channelInfo, setChannelInfo] = useState([])
    const [vidInfo, setVidInfo] = useState([])
    const [minimized, setMinimized] = useState(false)
    const [dimensions, setDimensions] = useState({
        height: 670,
        width: 949
    })
    const getRelatedVideos = async () => {
        const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&&part=id%2Csnippet&type=video&maxResults=50`;
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
            setVids(result.items)
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const getVidInfo = async () => {
        const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
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
            setVidTitle(result.items[0].snippet.title)
            setVidChannel(result.items[0].snippet.channelTitle)
            setViddesc(result.items[0].snippet.description)
            setVidInfo(result.items[0])
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const getChannelInfo = async () => {
        const url = `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelId}`;
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
            setChannelInfo(result.items[0])
            // console.log(result);
            console.log(channelInfo.statistics)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getRelatedVideos()
        getVidInfo()
        getChannelInfo()
    }, [id])
    //3a3d136566msh9860fc83fced19dp1e2420jsn548c1cffb434
    return (
        <Container minimized={minimized}>
            <VideoPart>
                <i style={{
                    color: 'white',
                    display: minimized ? '' : 'none',
                    padding: '15px',
                    fontSize: '25px',
                    margin: '5px',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '50%',
                    cursor: 'pointer',

                }} onClick={() => {
                    setMinimized(false)
                    setDimensions({
                        height: 670,
                        width: 949
                    })
                }} className="fa-solid fa-up-right-and-down-left-from-center"></i>
                <iframe width={dimensions.width} height={dimensions.height} src={`https://www.youtube.com/embed/${id}`} title="MAGIC SYSTEM - Magic In The Air Feat. Chawki [Clip Officiel]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{
                    borderRadius: '5px'
                }}  ></iframe>
                <VidTitle style={{
                    display: minimized === true ? 'none' : '',
                }}>{vidtitle}</VidTitle>
                <div style={{
                    display: minimized === true ? 'none' : 'flex',
                    marginLeft: '10px',
                    overflow: 'hidden',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: minimized === true ? 'none' : 'flex',
                    }}>

                        <img src={channelInfo?.snippet?.thumbnails.medium.url} height="60px" width="60px" alt="" style={{
                            borderRadius: '50%'
                        }} />
                        <div style={{
                            marginLeft: '10px',
                            display: minimized === true ? 'none' : '',
                        }}>
                            <VidChannel>{vidchannel}</VidChannel>
                            <div style={{
                                color: 'grey',
                                fontSize: '16px',
                                marginTop: '1px'
                            }}>
                                {channelInfo?.statistics?.subscriberCount} subscribers

                            </div>
                        </div>

                    </div>


                    <div style={{
                        display: minimized === true ? 'none' : 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: 'white',
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: 'white',
                            border: '2px solid #20262E',
                            paddingLeft: '8px',
                            paddingRight: '8px',
                            borderRadius: '30px',
                            marginRight: '30px',
                            height: '50px'
                        }}>

                            <div>

                                {vidInfo?.statistics?.viewCount} Views
                            </div>
                            <div style={{
                                marginLeft: '20px',
                                borderLeft: '2px solid #20262E',
                                paddingLeft: '10px'
                            }}>
                                <i className="fa-regular fa-thumbs-up"></i>
                                {vidInfo?.statistics?.likeCount}
                            </div>
                        </div>
                        <div style={{
                            marginRight: '5px',

                        }}>
                            <i className="fa-solid fa-down-left-and-up-right-to-center" onClick={() => {
                                setMinimized(true)
                                setDimensions({ height: 243, width: 430 })
                            }}></i>
                        </div>
                    </div>

                </div>
                <VidDescription style={{
                    display: minimized === true ? 'none' : '',
                }}>{viddesc}</VidDescription>
            </VideoPart>

            <RelatedVids style={{
                display: minimized ? 'none' : ''
            }}>

                {vids?.map((vid) => {
                    return <VideoCard onClick={() => {
                        setViUrl(vid.id.videoId)
                    }}>
                        <Thumbnail>
                            <img src={vid.snippet.thumbnails.high.url} width="100%" alt="" style={{
                                height: '200px'
                            }} />
                        </Thumbnail>
                        <div>

                            <VideoTitle>{vid.snippet.title.length > 25 ? vid.snippet.title.substr(0, 25).concat("...") : vid.snippet.title}</VideoTitle>
                            <ChannelName>{vid.snippet.channelTitle}</ChannelName>

                        </div>
                    </VideoCard>
                })}
            </RelatedVids>
        </Container>
    )
}

export default Player

const ShowPlayer = keyframes`
    0%{
        transform:translateY(100%)
    } 
    100%{
        transform:translateY(0%)
    }
`;



const Container = styled.div`
    width:83.6vw;
    height:90vh; 
    position:absolute;
    border-radius:10px;
    display:flex; 
  
    top:70px;
    animation-name: ${ShowPlayer};
    animation-duration: 1s;
    animation-iteration-count: 1;
    z-index:100;
    transition:0.25s ease-in-out;
    background-color:#1A1C20;
    ${props => props.minimized ? {
        height: '40vh',
        width: '29vw',
        top: '400px',
        right: '25px',
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden'
    } : {

    }} 
`;

const VideoPart = styled.div`
    height:89.5vh;
    overflow:scroll;
    overflow-x:hidden;
    width:940px;
    background-color:transparent
`;

const RelatedVids = styled.div`
    height:89.5vh;
    overflow:scroll;
    overflow-x:hidden;
    padding-top:4px
    
`;

const VideoCard = styled.div`
    height:220px;
    width:290px; 
    margin:3px 5px 8px 3px;
    border-radius:10px; 
    background-color:#1A1C20;
    overflow:hidden;
    border:1px solid #20262E;
    margin:3px;
`;

const Thumbnail = styled.div`
    height:150px;
    overflow:hidden; 
    box-sizing: border-box;  
    display:flex;
    align-items: center;
`;

const VideoTitle = styled.div`
    color:white;
    font-size:20px; 
    font-weight:382;
    margin-left:10px;
    height:31px;
    margin-top:10px;
`;

const ChannelName = styled.div`
    margin-left:10px;
    color:white;
    font-weight:20;
    font-size:14px;
    color:#cfcfcf; 
    margin-top:1px;
    
`;

const VidTitle = styled.div`
    font-size:28px;
    color:white;
    font-weight:400;
    box-sizing:border-box;
    padding:10px
`;

const VidChannel = styled.div`
    font-size:25px;
    color:whitesmoke;
    font-weight:300;
    box-sizing:border-box;  
`;

const VidDescription = styled.div`
    color:whitesmoke;
    box-sizing: border-box;
    padding:10px;
    font-size:16px;
    font-weight:20;
    

`;
