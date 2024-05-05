import React from 'react';
import {Flex, Image, Typography} from 'antd';

import './blog.css'

const { Title, Text, Link, Paragraph } = Typography;

function Blog(props) {
  const {theme} = props

  return (
    <Typography>
      <Title>Antrea Traceflow</Title>
      <p>
        This is the project I did when I was a software engineer intern at VMware. It won Most Innovative Project (Rank 1) at VMware Intern Poster Session that year.
      </p>
      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
        padding: "0 7%"
      }}>
        <b>Abstract</b> Antrea Traceflow is a powerful tool within the Antrea networking solution for Kubernetes, designed to enhance network troubleshooting and analysis. Antrea itself is a networking plugin for Kubernetes that provides networking and security services, including pod-to-pod connectivity, network policy enforcement, and load balancing. Traceflow, as part of Antrea, allows users to simulate the path of packets through their Kubernetes network, helping to diagnose and resolve connectivity issues. This tool provides detailed visibility into network behavior, allowing users to understand how packets are routed, identify potential bottlenecks or misconfigurations, and verify the effectiveness of network policies. By enabling users to trace packet flows between pods, Antrea Traceflow empowers Kubernetes administrators and network engineers to optimize and maintain a reliable and secure network infrastructure.
      </Paragraph>
      <Text italic>Read more about traceflow in Antrea official documentation
        <Link href="https://antrea.io/docs/v1.11.4/docs/traceflow-guide/" target="_blank"> here</Link>.
      </Text>
      <Title level={2}>Background Knowledge: Virtualization, Hypervisor and Container</Title>
      <p>
        Before the advent of virtual machines, one of the main challenges in computing was the inefficient use of expensive mainframe resources. Each application or user required its own dedicated mainframe, environment or OS (Operating System), leading to underutilization of these costly machines.
      </p>
      <p>
        <b>Virtualization</b> was invented to address the problem of underutilized hardware in data centers. By creating <b>virtual machine (VM)</b>s that could run multiple operating systems and applications on a single physical server, virtualization helped improve resource utilization, reduce costs, and increase flexibility in managing IT infrastructure.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/vm.png"}
        style={{ maxHeight: '450px' }}
        alt={'Antrea structure'}
      />
      <p>
        A <b>hypervisor</b> is a special kind of software that manages the virtual machines. It controls the hardware resources of the physical machine and allocates them to the virtual machines. The hypervisor also ensures that each virtual machine is isolated from the others, so they can't interfere with each other.
      </p>
      <p>
        <b>Container</b>s are a lightweight form of virtualization. Unlike traditional virtualization, containers share the host OS kernel and each container only contain the application and its dependencies. This makes containers more lightweight, faster to deploy, and more efficient in terms of resource usage. Containers are often used to package and deploy applications in a consistent and portable manner, making them more and more popular in modern software development.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/h-vs-c.png"}
        style={{ maxHeight: '450px' }}
        alt={'Antrea structure'}
      />
      <Title level={2}>What is Antrea?</Title>
      <Image
        src={process.env.PUBLIC_URL + "/images/antrea.png"}
        style={{ width: '70%', maxHeight: '600px' }}
        alt={'Antrea structure'}
      />
      <p>
        Antrea is an open-source networking and security solution designed for Kubernetes. It is implemented as a CNI (Container Network Interface) plugin and provides networking features such as pod-to-pod communication, network policies enforcement, and load balancing. Antrea's architecture is based on Open vSwitch (OVS) and utilizes the OVS OVN (Open Virtual Network) overlay for network connectivity, offering a scalable and efficient networking solution for Kubernetes clusters.
      </p>
      <Title level={2}>What is traceflow?</Title>
      <p>Traceflow is a feature in modern networking that allows users to simulate the path that packets take through a network. It's particularly useful for troubleshooting network issues, as it helps identify where packets might be getting dropped or delayed.
      </p>
    </Typography>
  )
}

export default Blog;