import React from 'react';
import {Typography} from "antd";

import '../blog.css'

function Dev(props) {
  const {Title, Paragraph, Link, Text} = Typography;

  return (
    <Typography style={{
      padding: "0 7%"
    }}>
      <Title>React Development</Title>
    </Typography>
  )
}

export default Dev;