import React from 'react';

import Traceflow from "./Traceflow/Traceflow";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Redesign from "./Redesign/Redesign";
import Dev from "./Dev/Dev";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Flex} from "antd";


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
      <Flex vertical align={'center'} onClick={() => { navigate("/projects")}} style={{
        position: 'fixed',
        top: '80px',
        left: '10px',
        padding: '7px',
        cursor: 'pointer',
        backgroundColor: "black",
        color: 'white',
        transition: 'background-color 0.3s ease',
        borderRadius: '30%',
        boxShadow: '2px 2px 2px grey',
      }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#290099'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "black"; }}>
          <ArrowLeftOutlined style={{
            fontSize: '25px'
          }}/>
          <span style={{
            fontSize: '15px'
          }}>Back</span>
      </Flex>
    </div>
  )
}

export default Blog;