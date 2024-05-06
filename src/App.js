import './App.css';

import {Route, Routes, useLocation} from "react-router-dom";
import {NavLink} from "react-router-dom";


import {Divider, Flex, Layout, Menu} from 'antd';
import {Footer, Header} from "antd/es/layout/layout";
import {CodeOutlined, GithubOutlined, HomeOutlined, LinkedinOutlined} from "@ant-design/icons";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import {useState} from "react";
import Blog from "./Blog/Blog";
import ErrorPage from "./ErrorPage/ErrorPage";


const headerItems = [
  {
    key: 'home',
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: 'projects',
    label: 'Projects',
    icon: <CodeOutlined />,
  },
  {
    key: 'about',
    label: 'About',
    icon: <CodeOutlined />,
  },
];

function App() {
  const location = useLocation()
  // console.log(location.pathname)

  const [url, setUrl] = useState(
    location.pathname === '/' ? 'home' :
      (location.pathname.startsWith('/projects') ? 'projects' : location.pathname.substring(1))
  )

  return (
    <div className="App">
      <Layout>
        <Header>
          <Flex justify={'space-between'} align={'center'}>
            <div style={{
              color: 'white',
              fontSize: '2rem',
            }}>YZ</div>
            <Flex justify={'flex-end'} flex={1}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[url]} style={{
                fontSize: '15px',
                // backgroundColor: '#4096ff',
                flex: 1,
                marginLeft: 'auto',
                justifyContent: 'flex-end',
              }}>
                {headerItems.map(item => (
                  <Menu.Item key={item.key}>
                    <NavLink to={item.key === 'home' ? '' : item.key}
                             activeStyle={{backgroundColor: 'white'}}
                             onClick={() => setUrl(item.key)}
                    >
                      {item.label}
                    </NavLink>
                  </Menu.Item>
                ))}
              </Menu>
            </Flex>
          </Flex>
        </Header>

        <Layout>
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projects/*" element={<Blog/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route index path="/*" element={<ErrorPage/>}/>
          </Routes>
        </Layout>

        <Divider/>

        <Footer>
          <Flex justify={'center'} align={'center'} vertical>
            <span style={{
              fontSize: '15px',
              paddingBottom: '5px',
            }}>Connect Me:</span>
            <Flex style={{
              gap: '15px',
            }}>
              <a href={"https://github.com/ZhangYW18"}> <GithubOutlined style={{fontSize: '30px'}} /> </a>
              <a href={"https://www.linkedin.com/in/yiwei-zh/"}> <LinkedinOutlined style={{fontSize: '30px'}}/> </a>
            </Flex>
          </Flex>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
