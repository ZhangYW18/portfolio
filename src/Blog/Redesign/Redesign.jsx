import React from 'react';
import {Typography} from "antd";

import '../blog.css'

function Redesign(props) {
  const {Title, Paragraph, Link, Text} = Typography;

  return (
    <Typography style={{
      padding: "0 7%"
    }}>
      <Title>Responsive Redesign</Title>

    </Typography>
  )
}

export default Redesign;