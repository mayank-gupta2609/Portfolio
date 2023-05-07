import React from 'react'
import { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import ReactIcon from './logo192.png'


const App = () => {

  const [hide, setHide] = useState(true)
  // const [color, setColor] = useState('#00FFCA')

  const SendMail = async () => {

    const url = 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3a3d136566msh9860fc83fced19dp1e2420jsn548c1cffb434',
        'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
      },
      body: {
        personalizations: [
          {
            to: [
              {
                email: 'john@example.com'
              }
            ],
            subject: 'Hello, World!'
          }
        ],
        from: {
          email: 'from_address@example.com'
        },
        content: [
          {
            type: 'text/plain',
            value: 'Hello, World!'
          }
        ]
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container >



      <Projects onClick={() => {

        setHide(!hide)
      }}>
        PROJECTS DEMO

      </Projects>

      <Sidebar style={{
        visibility: hide ? 'hidden' : ''
      }} hide={hide}>

        <Projectname>Spotify Clone</Projectname>
        <Projectname>Youtube Clone</Projectname>
        <Projectname>News App</Projectname>
        <Projectname>Backend MiddleWare</Projectname>
        <Projectname>Chat Application</Projectname>
      </Sidebar>

      <Body style={{
        filter: hide ? '' : 'blur(20px)',
        transition: '0.35s ease-in-out'
      }}>
        <Header>
          <Links>
            <Navigation>.home()</Navigation>
            <Navigation>.about()</Navigation>
          </Links>
          <Socials>
            <Platforms>Github</Platforms>
            <Platforms>Linkedin</Platforms>
          </Socials>
        </Header>

        <Content>

          <Brand>
            <BrandText>
              Hi, I'm Mayank Gupta
            </BrandText>
            <BrandText>
              A Front End Developer
            </BrandText>
            <Toptext >
              I like making unique Full Stack Web Apps
            </Toptext>
          </Brand>
          <Stacked>
            My Stack
            <StackIcons>
              <ReactJS>
                <Img src={ReactIcon} alt="" />
              </ReactJS>
              <Angular>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </Angular>
              <NextJS>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </NextJS>
              <Rest>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </Rest>
              <FontAwesome>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </FontAwesome>
              <StyledComponent>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </StyledComponent>
              <Firebase>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </Firebase>
              <NodeJS>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </NodeJS>
              <Express>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </Express>
              <MongoDb>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </MongoDb>
              <MERNStack>
                <Img src="https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp" alt="" />
              </MERNStack>

            </StackIcons>
          </Stacked>
        </Content>
        <ProjectSection>
          <ProjectHolder>
            <ProjectContent>
              <ProjTitles>Spotify Clone</ProjTitles>
              <div>
                A fully functional music app using MERN stack, having features of both Spotify and YouTube music
              </div>
            </ProjectContent>
            <ProjectContent>
              <ProjTitles>YouTube Clone</ProjTitles>
              <div>
                A fully functional YouTube clone using React JS and YouTube Api
              </div>
            </ProjectContent>
          </ProjectHolder>
          <ProjectHolder>
            <ProjectContent>
              <ProjTitles>NEWS App</ProjTitles>
              <div>
                NEWS using React JS and NEWS API
              </div>
            </ProjectContent>
            <ProjectContent>
              <ProjTitles>Chat Application</ProjTitles>
              <div>
                Chat application using NEXT JS and Firebase
              </div>
            </ProjectContent>
          </ProjectHolder>
          <ProjectHolder>
            <ProjectContent>
              <ProjTitles>Backend Middleware</ProjTitles>
              <div>
                An API that lets two services communicate in JSON and XML format
              </div>
            </ProjectContent>
          </ProjectHolder>

        </ProjectSection>



        <Lower>
          Have a Question ?  Feel free to ask!
        </Lower>
      </Body>

    </Container>
  )
}

export default App;

const Container = styled.div`
    background-color:rgb(21 23 28);
    width:100vw;
    height:100vh;
    box-sizing: border-box; 
    padding:30px; 
    overflow-y:scroll;  
`;


const Links = styled.div`
  display:flex;
`;

const Navigation = styled.div`
    margin:10px; 
    box-sizing: border-box;
    padding:10px;
    border:2px solid rgb(21 23 28);;
    border-radius:40px;
    :hover{
       border:2px solid hotpink;
      transition:0.25s ease-in-out;
    }
`;


const Header = styled.div`
  display:flex;
  justify-content:space-around
`;

const Body = styled.div`
  width:100%;
  height:100%; 
  color:white;
  font-family: 'Lato', sans-serif;
  font-size:40px; 
  padding:10px;
  box-sizing:border-box; 
`;


const Socials = styled.div`
  display:flex; 
  justify-content:space-between;
  margin-left:50px; 
`;

const Platforms = styled.div`
     margin:10px; 
    box-sizing: border-box;
    padding:10px;
    border-radius:40px;
    
    border:2px solid rgb(21 23 28);;
    :hover{
      border:2px solid #BC6FF1 ;
      transition:0.25s ease-in-out;
    } 
    
`;


const Projects = styled.div`
    position:fixed;
    color:white;
    left:-49px;
    top:50%;
    transform:rotate(90deg);
    background-color:#FF2E63;
    box-sizing: border-box;
    padding:5px;
    transition:0.15s ease-in-out;
    :hover{
      border-radius:10px;
      background-color:hotpink;
    }
`;

const inAnimation = keyframes`
 0% { left:-400px;}
 90% {  left:82px    } 
 100% {  left:80px;}
`;

const outAnimation = keyframes`
  0% { left:80px;} 
  50% { left:-400px; }  
 100% {  left:-400px;}
`;

const Sidebar = styled.div` 
    position:fixed; 
    left:80px; 
    background-color:rgb(21 23 28);
    display:flex;
    flex-direction:column;
    top:30%;
    border-radius:20px;
    transition:0.25s ease-in-out;
    padding-top:30px;
    padding-bottom:30px; 
    animation-name: ${props => props.hide ? outAnimation : inAnimation};
    animation-duration: 1s;
    animation-iteration-count: 1;
    z-index:100
`;

const Projectname = styled.div`
    margin:10px;
    color:#ffffff;
    font-family:'roboto', sans-serif;
    font-size:30px;
    transition:0.25s ease-in-out;
    padding:10px 20px 10px 20px;
    border-radius:10px;
    :hover{
      color:#14FFEC;
      background-color:#1d1c24;
    }
`;


const Content = styled.div`
  font-family:Roboto, sans-serif;
  color:#AA96DA;
  margin-left:40px;
  margin-top:40px; 
  font-size:50px; 
  justify-content:space-around;
  font-weight:300;
  border-radius:10px;  
  background: radial-gradient(ellipse at bottom, rgb(21 23 28), rgb(21 23 31));
  position: relative;
`;
const Toptext = styled.div`
  color:whitesmoke;
  font-size:30px;
font-weight:100;
margin-top:10px;
`;

const BrandText = styled.div`
   background: linear-gradient(to right ,#FF78F0 , #FC2947);
     fon-family:Arial,sans-serif;
    
     -webkit-text-fill-color: transparent;
     -webkit-background-clip: text;
`;
const Brand = styled.div`
     background-color:${props => props.color}; 
     font-size:95px;
     font-weight:400;
     padding:170px; 
     font-family: 'Raleway', sans-serif; 
     ${Toptext}{
      color:white;
     };
     box-sizing: border-box;
`;

const Stacked = styled.div`
    display:flex;
    justify-content: center;
    overflow:hidden;
    margin-top:98px;
    border:1px solid red;
    align-items: center;
    flex-direction: column;
`;

const ProjectSection = styled.div`
  background-color:#1d1c24;
  padding:10px;
  border-radius:10px;
  margin-bottom:40px; 
  margin-top:90px;
`;

const ProjectHolder = styled.div`
  display:flex;
  justify-content: center;
  font-size:40px;
  margin:25px; 
  align-items:center;
  font-weight:bold;
 
`;

const AnimateBackground = keyframes`
  0% { border-bottom :3px solid hotpink; } 
  25% {  border-bottom :3px solid aqua;}
  50% { border-bottom :3px solid pink; }  
 100% { border-bottom :3px solid hotpink;}
`;

const ProjTitles = styled.div` 
  margin-bottom:40px;
  transition:0.25s ease-in-out;
  border:3px solid #1D1C24; 
  border-radius:28px;
  padding:0px 20px 5px 20px;
  :hover{
    border-bottom:3px solid hotpink;
    animation-name: ${AnimateBackground};
    animation-duration:8s;
    animation-iteration-count: infinite; 
    animation-delay:2s;  
  }
`;

const ProjectContent = styled.div`
    display:flex;  
    width:50%;
    flex-direction:column;
    margin:10px;
    border-radius:30px;
    padding:20px 20px 20px 20px; 
    height:300px;
    align-items:center;
    text-align:center;
    backdrop-filter:blur(40px);
    font-size:40px;
    ${ProjTitles}{
      font-size:70px;
    };
`;

const Lower = styled.div`
  border:1px solid red;
  padding:20px 20px 90px;
  border-radius:20px 20px 0px 0px;
  background-color:#1d1c24;
`;

const StackIcons = styled.div`
    border:1px solid red;
    position:relative;
    height:700px;
    width:800px;
`;

const ReactJS = styled.div`
    position:absolute;
    left:41%;
    border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const Angular = styled.div`
  position:absolute;
  top:10%;
  left:0%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const NextJS = styled.div`
  position:absolute;
  top:10%;
  right:0%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;

`;

const Rest = styled.div`
  position:absolute;
  top:40%;
  right:0%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const FontAwesome = styled.div`
  position:absolute;
  top:40%;
  left:0%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const StyledComponent = styled.div`
  position:absolute;
  top:25%;
  left:45%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;


`;

const Firebase = styled.div`
position:absolute;
  bottom:15%;
  right:25%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const NodeJS = styled.div`
  position:absolute;
  bottom:15%;
  left:25%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const Express = styled.div`
  position:absolute;
  bottom:22%;
  right:0%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const MongoDb = styled.div`
  position:absolute;
  bottom:22%;
  left:0%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const MERNStack = styled.div`
  position:absolute;
  bottom:1%;
  left:37%;
  border-radius:50%;
    border:1px solid red;
    height:150px;
    width:150px;
`;

const Img = styled.img`
  height:100%;
  width:100%; 
`;
