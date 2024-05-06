import React from 'react';
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import {Flex} from "antd";
import {useNavigate} from "react-router-dom";

const cardWidth = '27%'

function Projects(props) {
  const navigate = useNavigate()

  return (
    <Flex justify={'space-evenly'} align={'center'} style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Card
        hoverable
        style={{ width: cardWidth }}
        cover={<img alt={'Antrea'} src={ process.env.PUBLIC_URL + "/images/antrea.png"}/>}
        onClick={() => { navigate("/projects/traceflow") }}
      >
        <Meta title={'Container Network Traceflow'}
              description={'As part of open source project Antrea (1.5k stars on GitHub), the project saves network admins ' +
              '80% of diagnosis time.'} />
      </Card>
      <Card
        hoverable
        style={{ width: cardWidth }}
        cover={<img alt={'Redesigned Webpage'} src={ process.env.PUBLIC_URL + "/images/redesign.jpg"}/>}
        onClick={() => { navigate("/projects/redesign") }}
      >
        <Meta title={'Responsive Redesign'}
              description={'Take a look at how I redesigned a cliche, clunky medical center webpage ' +
              'into a webpage with modern, harmonious UI. '} />
      </Card>
      <Card
        hoverable
        style={{ width: cardWidth }}
        cover={<img alt={'My Album Favorite Page'} src={ process.env.PUBLIC_URL + "/images/dev.png"}/>}
        onClick={() => { navigate("/projects/dev") }}
      >
        <Meta title={'Album Library Page Dev'}
              description={'With competitive analysis conducted ahead, I managed to create my own music ' +
              'album favorite webpage with React.js.'} />
      </Card>
    </Flex>
  )
}

export default Projects;