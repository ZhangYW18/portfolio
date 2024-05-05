import React from 'react';
import {Divider, Flex, Image, List, Typography} from 'antd';
import "./Home.css"

const { Title, Text } = Typography;

const intro_data = [
  <span>Ex SDE intern at DoorDash, VMware and ByteDance</span>,
  'Most Innovative Project (Rank 1) at VMware Intern Poster Session',
  <span>Silver Medal (Rank 6/84) at
    <a href={"https://cs.brown.edu/news/2023/03/31/brown-cs-undergraduates-advance-international-collegiate-programming-contest-nationals/"}> ICPC Regional Contest</a>
  </span>,
  <span>Contributor for <a href={'https://github.com/antrea-io/antrea'}>Antrea</a> (1.5k+ stars on GitHub)</span>,
  <span>Running a <a href={"http://blog.csdn.net/sinat_35406909"}>Tech Blog</a> with More Than 250,000 Clicks</span>,
];

function Home(props) {
  return (
    <Flex>
      <Flex justify={'center'} align={'center'} vertical
            style={{
              width: '55%',
              padding: '5% 0 5% 5%',
            }}>

        <Flex>
          <div>
            <Title level={4} style={{ margin: 0, zIndex: '4'}}>
              "Program <div className="circle">Smarter</div>, Not Harder"
            </Title>
            <Title level={1} style={{ margin: 0 }}>
              Meet <div style={{
                color: "deeppink",
                display: 'inline-block',
                position: 'relative',
                fontFamily: 'Monaco',
                fontWeight: 'bold',
            }}>Yiwei Zhang</div>
            </Title>
            <Title level={3} style={{ margin: 0 }}>
              <u>Software Engineer</u> at <span style={{color: '#FF3008'}}>DoorDash</span>
            </Title>
          </div>

          <Flex align={'center'}>
            <img src={process.env.PUBLIC_URL + "/images/keyboard.jpg"} alt="Keyboard" style={{
              width: '100px',
              height: '70px',
              zIndex: '1',
              paddingLeft: '10px'
            }}/>
          </Flex>
        </Flex>


        <Divider />
        <List dataSource={intro_data} renderItem={(item, i) => (
          <List.Item rowKey={i} style={{justifyContent: "center"}}>
            <Text strong>{item}</Text>
          </List.Item>
        )}/>

      </Flex>
      <Flex justify={'center'} align={'center'} style={{ width: '45%' }}>
        <Image
          src={process.env.PUBLIC_URL + "/images/home.jpeg"}
          style={{ width: '70%', maxHeight: '800px' }}
          alt={'Yiwei\'s Picture at competitive programming contest'}
        />
      </Flex>

    </Flex>
  )
}

export default Home;