import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Loader from '../Loader'

const News = () => {
    const Apikey = `${process.env.REACT_APP_NEWS_APP_API_KEY}`
    const [section, setSection] = useState("general")
    // section.current = "general"
    const category = useRef()
    category.current = "general"
    const [articles, setArticles] = useState([]);
    const pageNumber = useRef()
    pageNumber.current = 1
    const [loading, setLoading] = useState(true)
    const [country, setCountry] = useState("IN")
    const topRef = useRef(null);

    const fetchNews = async () => {
        console.log(section)
        console.log(pageNumber)
        if (document.querySelector(".articlesection")) document.querySelector(".articlesection").scrollIntoView({ behavior: "smooth", block: "end" })
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category.current}&apiKey=${Apikey}&page=${pageNumber.current} `;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        console.log(articles)
        console.log(parsedData)
        setTimeout(() => {

            setLoading(false)
        }, 500)

        setLoading(true)
    }


    useEffect(() => {
        fetchNews()
    }, [category.current])

    return (
        <Container>
            <Header>
                <Category style={{ border: section === "general" ? '2px solid hotpink' : '' }} onClick={() => { category.current = "general"; pageNumber.current = 1; fetchNews(); setSection("general"); }}>General</Category>
                <Category style={{ border: section === "science" ? '2px solid hotpink' : '' }} onClick={() => { category.current = "science"; pageNumber.current = 1; fetchNews(); setSection("science"); }}>Science</Category>
                <Category style={{ border: section === "sports" ? '2px solid hotpink' : '' }} onClick={() => { category.current = "sports"; pageNumber.current = 1; fetchNews(); setSection("sports"); }}>Sports</Category>
                <Category style={{ border: section === "business" ? '2px solid hotpink' : '' }} onClick={() => { category.current = "business"; pageNumber.current = 1; fetchNews(); setSection("business"); }}>Business</Category>
                <Category style={{ border: section === "health" ? '2px solid hotpink' : '' }} onClick={() => { category.current = "health"; pageNumber.current = 1; fetchNews(); setSection("health"); }}>Health</Category>
                <Category style={{ border: section === "entertainment" ? '2px solid hotpink' : '' }} onClick={() => { category.current = "entertainment"; pageNumber.current = 1; fetchNews(); setSection("entertainment"); }}>Entertainment</Category>
            </Header>
            <Body>
                <Sidebar>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis? Architecto, earum dolor.

                </Sidebar>
                <Content>
                    <Heading>
                        {/* <Controls>
                            <ControlIcon onClick={() => {
                                if (pageNumber.current === 1) return
                                pageNumber.current--
                                fetchNews();
                                console.log(pageNumber)
                            }}>
                                <i className="fa-solid fa-chevron-left"></i>
                            </ControlIcon>
                            <ControlIcon onClick={() => {
                                if (pageNumber.current === 4) return
                                pageNumber.current++
                                fetchNews();

                                console.log(pageNumber)
                            }}>
                                <i className="fa-solid fa-chevron-right"></i>
                            </ControlIcon>
                        </Controls> */}
                    </Heading>
                    {loading && <Loader></Loader>}
                    {!loading && <ArticleSection ref={topRef}>
                        {articles.map((article) => {
                            return <ArticleCard className='articlesection'>
                                <a href={article.url} >

                                    <ImgHolder>
                                        <img src={article.urlToImage} alt="" width="100%" height="100%" />
                                    </ImgHolder>
                                    <Title>
                                        {article.title}
                                    </Title>
                                    <Source>
                                        Source - {article.source.name}
                                    </Source>
                                </a>
                            </ArticleCard>
                        })}
                    </ArticleSection>}
                </Content>
            </Body>
        </Container>
    )
}

export default News;

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:#F7F9FC;
    padding:30px;
    box-sizing:border-box;  
`;


const Header = styled.div`
    display:flex;
    justify-content:center;  
`;

const Category = styled.div`
    font-size:30px;
    font-family: 'Rajdhani', sans-serif;
    margin:20px; 
    padding:2px 16px;
    border-radius:40px;
    border:2px solid #F7F9FC;
    :hover{
        border:2px solid #00FFCA;
        transition:0.25s ease-in-out;
    }
;`

const Content = styled.div`
    margin:3px;
    background-color:white;
    padding:5px;
    border-radius:10px;
    height:100%;
    overflow-x:hidden;
    width:100%;
    overflow-y:scroll;
`;

const Sidebar = styled.div`
    max-width:300px;
    background-color:white;
    padding:5px;
    border-radius:10px;
    margin:3px;
    height:200px;
`;

const Body = styled.div`
    display:flex;
    height:90%;
    width:100%;
`;

const Heading = styled.div`
    text-align:center;
    font-size:40px;  
    padding-left:15px;
`;

const ArticleSection = styled.div`
    display:grid; 
    padding-left:17px;
    grid-template-columns: 100px 100px 100px;
  grid-template-rows: 400px 2 10px; 
  column-gap: 310px;
  row-gap: 3px;
`;

const ArticleCard = styled.div`
    height:430px;
    width:400px; 
    padding-top:5px;
    border-radius:10px;
    margin:10px 10px 0px 0px; 
    border:10px;
    overflow:hidden;
    
padding-bottom:10px;
    border:1px solid #E4FBFF;
    text-decoration:none !important;
`;

const Title = styled.div` 
width:380px;
height:120px;
margin:10px;
border-radius:8px; 
font-size:21px; 
`;

const Source = styled.div` 
width:380px;
height:50px;
margin-top:20px;
margin-left:10px;
border-radius:8px; 
font-size:18px; 
color:grey
`;

const ImgHolder = styled.div`
    background-color:#F7F9FC;
width:380px;
height:230px;
margin:10px;
border-radius:10px;  
overflow:hidden;
`;

const Controls = styled.div`
    display:flex;
`;

const ControlIcon = styled.div`
    font-size:30px;
    margin:5px;
    transition:0.15s ease-in-out;
    :hover{
        opacity:0.4
    }
`;