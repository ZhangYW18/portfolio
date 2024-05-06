import React from 'react';
import {Carousel, Flex, Image, Typography} from "antd";

import '../Blog/blog.css'

const { Title } = Typography;

const titleStyle = {
  color: "deeppink",
  display: 'inline-block',
  position: 'relative',
  fontFamily: 'Monaco',
  fontWeight: 'bold',
}

function About(props) {
  return (
    <Flex vertical style={{
      gap: '50px',
      padding: "0 7%",
    }}>
      {/*section 1: about me*/}
      <Flex style={{
        paddingTop: "50px"
      }}>
        <Flex justify={'center'} align={'center'} vertical style={{
          width: '55%',
          textAlign: "left",
          paddingRight: '5%',
        }}>
          <Flex style={{
            textAlign: 'center',
          }}>
            <Title level={1} style={titleStyle }>About Me</Title>
          </Flex>
          <Typography>
            <p>
              Hi there! I'm Yiwei. I'm a software engineer from China.
            </p>
            <p>
              I previously worked as an SDE intern at DoorDash, VMware and ByteDance, and my project won Most Innovative Project as Rank 1 overall in VMware Intern Poster Session. I am an active member of the open-source community and have contributed to popular repositories. I have a solid background in terms of algorithms and data structures and have won several awards in programming contests like <a href={"https://icpc.global/"}>ACM-ICPC</a>. I am passionate to learn about new technologies and share what I learned, and currently running a personal <a href={"http://blog.csdn.net/sinat_35406909"}>tech blog</a> which achieved more than 250,000 clicks.
            </p>
          </Typography>
        </Flex>

        <Flex style={{ width: '45%' }} align={'center'}>
          <Image src={process.env.PUBLIC_URL + "/images/about/me1.jpeg"} alt="me" style={{ width: '80%', maxHeight: '600px' }}/>
        </Flex>
      </Flex>

      {/*section 2: competitive programming*/}

      <Flex>
        <Flex justify={'center'} align={'center'} style={{
          width: '50%',
        }}>
            <div>
              <Image src={process.env.PUBLIC_URL + "/images/about/icpc2.jpg"} alt="me" style={{ width: '90%', maxHeight: '500px' }}/>
            </div>
          {/*<Carousel autoplay style={{*/}
          {/*  width: '80%',*/}
          {/*  maxWidth: '600px',*/}
          {/*}}>*/}
          {/*  <div>*/}
          {/*    <Image src={process.env.PUBLIC_URL + "/images/about/icpc2.jpg"} alt="me" style={{  }}/>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <Image src={process.env.PUBLIC_URL + "/images/about/icpc3.jpg"} alt="me" style={{ }}/>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <Image src={process.env.PUBLIC_URL + "/images/about/icpc.jpeg"} alt="me" style={{ }}/>*/}
          {/*  </div>*/}
          {/*</Carousel>*/}
        </Flex>

        <Flex justify={'center'} align={'center'} vertical style={{
          width: '50%',
          textAlign: "left",
          paddingLeft: '5%',
        }}>
          <Flex style={{
            textAlign: 'center',
          }}>
            <Title level={1} style={titleStyle}>Competitive Programming</Title>
          </Flex>
          <Typography>
            <p>
              <b> {String.raw`Ooh-la-love, I've fallen in love`} </b>
            </p>
            <p>
              <b> {String.raw`And it's better this time than ever before`} </b>
            </p>
            <p>
              I fell in love with competitive programming when I was 10 - yes, in elementary school. There were programming competitions in my hometown for elementary students, using BASIC language. Since then, programming has become an irreplaceable part of my life. I took part in the NOIP (National Olympiad in Informatics in Provinces) in China six times in middle school and high school, once every year. When I entered university, I chose computer science as my major without any doubt, and continued to take part in the ICPC (International Collegiate Programming Contest) and other contests. Check out my trip to 2023 ICPC North America Championship <a href={"https://blog.cs.brown.edu/2023/08/07/whats-your-most-brilliant-moment-my-icpc-nac-trip/"}>here</a>.
            </p>
          </Typography>
        </Flex>

      </Flex>

      {/*section 3: hobbies*/}
      <Flex>
        <Flex justify={'center'} align={'center'} vertical style={{
          width: '55%',
          textAlign: "left",
          paddingRight: '5%',
        }}>
          <Flex style={{
            textAlign: 'center',
          }}>
            <Title level={1} style={titleStyle }>Hobbies</Title>
          </Flex>
          <Typography>
            <p>
              I like hiking in great nature and enjoy the sound of wind, leaves, wildlife, and everything offered by this amazing earth.
            </p>
            <p>
              I like playing basketball. I won champion in 2015 Nike China High School Basketball League (Nanjing City Division) as the starting center of Nanjing Jinling High School basketball team. See <a href={"http://www.jlhs.net/DisplayInfo.jsp?pageID=10381&menuID=156"}>this article</a> for details. Later, I won back-to-back champions in UESTC School of Electronic Engineering Basketball League from 2016 to 2017.
            </p>
            <p>
              I like exchanging postcards with people around the world. Currently I've just received 100th postcard from the whole world on <a href={"https://www.postcrossing.com/"}>Postcrossing</a>!
            </p>
            <p>
              I like travelling and I have visited 28/34 province-level divisions of China.
            </p>
            <p>
              I like listening to music, especially indie rock, shoegaze, dream pop. Check out my favorite artists and albums <a href={"https://www.last.fm/user/fairytale13"}>here</a>.
            </p>
          </Typography>
        </Flex>

        <Flex style={{ width: '45%' }} align={'center'}>
          <Image src={process.env.PUBLIC_URL + "/images/about/me2.jpeg"} alt="me" style={{ width: '80%', maxHeight: '600px' }}/>
        </Flex>

      </Flex>


    </Flex>
  )
}

export default About;