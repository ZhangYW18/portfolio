import React from 'react';

import Traceflow from "./Traceflow/Traceflow";
import {useNavigate, useParams} from "react-router-dom";
import Redesign from "./Redesign/Redesign";
import Dev from "./Dev/Dev";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {FloatButton} from "antd";


function Blog(props) {
  const {topic} = useParams();
  const navigate = useNavigate();

  let component = <div/>

  switch (topic) {
    case 'traceflow':
      component = <Traceflow/>;
      break;
    case 'redesign':
      component = <Redesign/>;
      break;
    case 'dev':
      component = <Dev/>;
      break;
    default:
      return (
        <div>
          <h1>Project not found!</h1>
        </div>
      )
  }
  return (
    <div>
      {component}
      {/*Add a Back button for every article */}

      <FloatButton.Group shape="square">
        <FloatButton
          icon={<ArrowLeftOutlined />}
          description="BACK"
          shape="square"
          onClick={() => { navigate("/projects")}}
        />
        <FloatButton.BackTop visibilityHeight={0} description="TOP"/>
      </FloatButton.Group>

    </div>
  )
}

export default Blog;