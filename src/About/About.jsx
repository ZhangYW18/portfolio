import React from 'react';
import { Flex } from "antd";

import '../Blog/blog.css'
import AboutSection from "./AboutSection/AboutSection";
import { useMediaQuery } from "react-responsive";

function About(props) {
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });

  return (
    <Flex vertical style={{
      gap: '50px',
      paddingTop: isTablet ? "50px" : 0,
      paddingBottom: isTablet ? "50px" : 0,
      paddingLeft: "7%",
      paddingRight: "7%",
    }}>
      {/*section 1: about me*/}
      <AboutSection
        title={"About Me"}
        paragraphs={
          [
            <div>
              Hi there! I'm Yiwei. I'm a software engineer from China.
            </div>,
            <div>
              I previously worked as an SDE intern at DoorDash, VMware and ByteDance, and my project won Most Innovative Project as Rank 1 overall in VMware Intern Poster Session. I am an active member of the open-source community and have contributed to popular repositories. I have a solid background in terms of algorithms and data structures and have won several awards in programming contests like <a href={"https://icpc.global/"}>ACM-ICPC</a>. I am passionate to learn about new technologies and share what I learned, and currently running a personal <a href={"http://blog.csdn.net/sinat_35406909"}>tech blog</a> which achieved more than 250,000 clicks.
            </div>,
          ]
        }
        picUrl={"/images/about/me1.jpeg"}
      />

      {/*section 2: competitive programming*/}
      <AboutSection
        title={"Competitive Programming"}
        paragraphs={
          [
            <div>
              <b> {String.raw`Ooh-la-love, I've fallen in love`} </b>
            </div>,
            <div>
              <b> {String.raw`And it's better this time than ever before`} </b>
            </div>,
            <div>
              I fell in love with competitive programming when I was 10 - yes, in elementary school. There were programming competitions in my hometown for elementary students, using BASIC language. Since then, programming has become an irreplaceable part of my life. I took part in the NOIP (National Olympiad in Informatics in Provinces) in China six times in middle school and high school, once every year. When I entered university, I chose computer science as my major without any doubt, and continued to take part in the ICPC (International Collegiate Programming Contest) and other contests. Check out my trip to 2023 ICPC North America Championship <a href={"https://blog.cs.brown.edu/2023/08/07/whats-your-most-brilliant-moment-my-icpc-nac-trip/"}>here</a>.
            </div>
          ]
        }
        picUrl={"/images/about/icpc2.jpg"}
        reverse
      />


      {/*section 3: hobbies*/}
      <AboutSection
        title={"Hobbies"}
        paragraphs={
          [
            <div>
              I like hiking in great nature and enjoy the sound of wind, leaves, wildlife, and everything offered by this amazing earth.
            </div>,
            <div>
              I like playing basketball. I won champion in 2015 Nike China High School Basketball League (Nanjing City Division) as the starting center of Nanjing Jinling High School basketball team. See <a href={"http://www.jlhs.net/DisplayInfo.jsp?pageID=10381&menuID=156"}>this article</a> for details. Later, I won back-to-back champions in UESTC School of Electronic Engineering Basketball League from 2016 to 2017.
            </div>,
            <div>
              I like exchanging postcards with people around the world. Currently I've just received 200th postcard from the whole world on <a href={"https://www.postcrossing.com/"}>Postcrossing</a>!
            </div>,
            <div>
              I like travelling and I have visited 28/34 province-level divisions of China. I also went to Uzbekistan, Japan, Korea, Singapore, Mexico - next destination is the whole world!
            </div>,
            <div>
              I like movies and is a regular audience at Metrograph NYC. I document what I saw on Douban/Letterboxd and sometimes leave short reviews.
            </div>,
            <div>
              I like listening to music, especially indie rock, shoegaze, dream pop. Check out my favorite artists and albums <a href={"https://www.last.fm/user/fairytale13"}>here</a>.
            </div>
          ]
        }
        picUrl={"/images/about/me2.jpeg"}
      />

    </Flex>
  )
}

export default About;