import React from 'react';
import {Carousel, Flex, Image, Typography} from "antd";
import { useMediaQuery } from 'react-responsive';

const { Title } = Typography;

const titleStyle = {
  color: "deeppink",
  display: 'inline-block',
  position: 'relative',
  fontFamily: 'Monaco',
  fontWeight: 'bold',
}

function AboutSection(props) {
  const isTablet = useMediaQuery({ query: '(max-width: 1200px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const {title, paragraphs, picUrl, reverse} = props

  return (
    <div>
      <Flex style={{
        paddingTop: isTablet ? 0 : "50px",
        flexDirection: isTablet ? 'column' : (reverse ? 'row-reverse' : 'row')
      }}>
        <Flex justify={'center'} align={'center'} vertical style={{
          width: isTablet ? '100%' : '55%',
          textAlign: "center",
          paddingRight: isTablet ? 0 : '5%',
        }}>
          <Flex style={{
            textAlign: 'center',
          }}>
            <Title level={1} style={titleStyle}>{title}</Title>
          </Flex>
          <Typography>
            {paragraphs.map( paragraph =>
              <p>
                {paragraph}
              </p>
            )}
          </Typography>
        </Flex>

        <Flex style={{
          width: isTablet ? '100%' : '45%'
        }} align={'center'} justify={'center'}>
          <Image src={process.env.PUBLIC_URL + picUrl} alt="me" style={{ width: isTablet ? '100%' :'80%', maxHeight: '600px' }}/>
        </Flex>
      </Flex>
    </div>
  )
}

export default AboutSection;