import React from 'react';
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import {Flex} from "antd";
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

const cardWidth = '27%'

function Projects(props) {
  const navigate = useNavigate()
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Flex justify={'space-evenly'} align={'center'} style={{ paddingTop: '100px', paddingBottom: '50px', gap: isTablet ? '50px' : '0' }} vertical={isTablet}>
      <Card
        hoverable
        style={{ width: isMobile ? '90%' : (isTablet ? '50%' : cardWidth) }}
        cover={<img alt={'Antrea'} src={ process.env.PUBLIC_URL + "/images/antrea.png"}/>}
        onClick={() => { navigate("/projects/traceflow") }}
      >
        <Meta title={'Container Network Traceflow'}
              description={'As part of open source project Antrea (1.5k stars on GitHub), the project saves network admins ' +
              '80% of diagnosis time.'} />
      </Card>
      <Card
        hoverable
        style={{ width: isMobile ? '90%' : (isTablet ? '50%' : cardWidth) }}
        cover={<img alt={'Redesigned Webpage'} src={ process.env.PUBLIC_URL + "/images/redesign.jpg"}/>}
        onClick={() => { navigate("/projects/redesign") }}
      >
        <Meta title={'Responsive Redesign'}
              description={'Take a look at how I redesigned a cliche, clunky medical center webpage ' +
              'into a webpage with modern, harmonious UI. '} />
      </Card>
      {/*<Card*/}
      {/*  hoverable*/}
      {/*  style={{ width: isMobile ? '90%' : (isTablet ? '50%' : cardWidth) }}*/}
      {/*  cover={<img alt={'My Album Favorite Page'} src={ process.env.PUBLIC_URL + "/images/dev.png"}/>}*/}
      {/*  onClick={() => { navigate("/projects/dev") }}*/}
      {/*>*/}
      {/*  <Meta title={'Album Library Page Dev'}*/}
      {/*        description={'With competitive analysis conducted ahead, I managed to create my own music ' +*/}
      {/*        'album favorite webpage with React.js.'} />*/}
      {/*</Card>*/}

      <Card
        hoverable
        style={{ width: isMobile ? '90%' : (isTablet ? '50%' : cardWidth) }}
        cover={<img alt={'cache'} src={ process.env.PUBLIC_URL + "/images/cache.png"}/>}
        onClick={() => { navigate("/projects/dashcache") }}
      >
        <Meta title={'DashCache Integration'}
              description={'I boosted the performance of DoorDash\'s core platform services by integrating multi-level ' +
              'cache with our code base.'} />
      </Card>
    </Flex>
  )
}

export default Projects;