import React from 'react';
import {Divider, Flex, Image, Typography} from "antd";
import {CodeBlock} from "react-code-blocks";
import '../blog.css'

const {Title, Paragraph, Link, Text} = Typography;

function Traceflow(props) {
  return (
    <Typography style={{
      padding: "0 7%"
    }}>
      <Title>Antrea Traceflow</Title>
      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Abstract</b> Antrea Traceflow is a powerful tool within the Antrea networking solution for Kubernetes, designed to enhance network troubleshooting and analysis. Antrea itself is a networking plugin for Kubernetes that provides networking and security services, including pod-to-pod connectivity, network policy enforcement, and load balancing. Traceflow, as part of Antrea, allows users to simulate the path of packets through their Kubernetes network, helping to diagnose and resolve connectivity issues. This tool provides detailed visibility into network behavior, allowing users to understand how packets are routed, identify potential bottlenecks or misconfigurations, and verify the effectiveness of network policies. By enabling users to trace packet flows between pods, Antrea Traceflow empowers Kubernetes administrators and network engineers to optimize and maintain a reliable and secure network infrastructure.
      </Paragraph>
      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        This is the project I did when I was a software engineer intern at VMware. It won Most Innovative Project (Rank 1) at VMware Intern Poster Session (See picture below) that year.
      </Paragraph>

      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Role</b> Software Engineer Intern (Cloud Computing, Computer Network)
      </Paragraph>

      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Time</b> April 2020 ~ July 2020 (3 Months)
      </Paragraph>

      <Paragraph style={{
        textAlign: "left",
      }}>
        * Read more about Antrea traceflow in Antrea official documentation
        <Link href="https://antrea.io/docs/v1.11.4/docs/traceflow-guide/" target="_blank"> here</Link>.
      </Paragraph>

      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/vmware-office.jpeg"}
        style={{ maxHeight: '450px' }}
        alt={'VMware Intern Poster Session'}
      />
      <p/>
      <Divider/>

      <Title level={2}>Background Knowledge: Virtualization, Hypervisor, Container, Kubernetes</Title>
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
      <p>
        <b>Kubernetes</b> is an open-source platform for automating the deployment, scaling, and management of containerized applications. At its core, Kubernetes manages <b>cluster</b>s of nodes, which are the underlying machines (physical or virtual) that run your applications. Clusters consist of a <b>master node</b> that controls the cluster and multiple <b>worker node</b>s that run the actual applications in containers.
      </p>
      <p>
        In Kubernetes, the basic unit of deployment is a <b>pod</b>, which is a group of one or more containers that are scheduled together on the same host. Pods are the smallest deployable units in Kubernetes and represent a single instance of a running process in your cluster.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/k8s.webp"}
        style={{ maxHeight: '600px' }}
        alt={'Kubernetes Cluster Structure'}
      />
      <p/>
      <Text>
        An Example Kubernetes Cluster
      </Text>
      <p>
        Kubernetes provides networking capabilities that allow pods to communicate with each other within the cluster. Each pod gets its own IP address, and Kubernetes sets up routes so that pods can communicate with each other across nodes in the cluster.
      </p>
      <p>
        Kubernetes also allows you to define network policies that control the flow of traffic to and from pods. Network policies can be used to define rules for what traffic is allowed to reach pods based on factors such as the source IP address, the port, and the protocol. This helps you control and secure the network traffic in your cluster.
      </p>

      <Title level={2}>What is <a href={'https://github.com/antrea-io/antrea'}>Antrea</a>?</Title>
      <Image
        src={process.env.PUBLIC_URL + "/images/antrea.png"}
        style={{ width: '70%', maxHeight: '600px' }}
        alt={'Antrea structure'}
      />
      <p>
        Antrea is an open-source networking and security solution designed for Kubernetes and developed by VMware. It is implemented as a CNI (Container Network Interface) plugin and provides networking features such as pod-to-pod communication, network policies enforcement, and load balancing. Antrea's architecture is based on <b>Open vSwitch (OVS)</b> and utilizes the OVS OVN (Open Virtual Network) overlay for network connectivity, offering a scalable and efficient networking solution for Kubernetes clusters.
      </p>
      <p>
        Antrea consists of two main components: the Antrea controller and the Antrea agent. The Antrea controller is running on the master node of cluster and is responsible for managing and configuring the networking and security policies for the entire cluster. It serves as the central control plane for the Antrea network. On the other hand, the Antrea agent runs on each node in the cluster and is responsible for implementing the networking and security policies defined by the controller. It communicates with the controller to receive configuration updates and ensure that the network is functioning correctly. Together, the Antrea controller and agent provide a reliable and scalable networking solution for Kubernetes clusters.
      </p>

      <Title level={2}>What is Traceflow: Problem and Solution</Title>
      <p>
        Imagine you're a network engineer. You found an error related to the network in a Kubernetes cluster, and you are trying to diagnose the cause of it. You start by examining the logs and checking the configuration settings, but you can't pinpoint the exact issue. Without useful tool, you're left with limited visibility into how packets are flowing through the network. You're unable to simulate packet paths or test network policies, making it challenging to understand where the problem lies. This lack of visibility not only prolongs the troubleshooting process, but also increases the risk of making incorrect changes that could further disrupt the network.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/confused-sde.jpg"}
        style={{ maxHeight: '300px' }}
        alt={'Confused Software Engineer'}
      />
      <p>
        Traceflow is a feature in modern networking that allows users to simulate the path that packets take through a network. It's particularly useful for troubleshooting network issues, as it helps identify where packets might be getting dropped or delayed. By sending simulated packets with specific characteristics (like source, destination, and protocol), Traceflow can provide insights into network routing, firewall rules, and overall network health. This tool is valuable for network engineers and administrators in understanding and optimizing their network infrastructure.
      </p>
      <p>
        Now let's continue the story above. What would happen if traceflow is introduced to the confused network engineer (you) above? With Traceflow, you now have the ability to simulate the path of packets through the network, providing a detailed view of how packets are flowing and where they might be getting dropped or delayed. Excited to test this new tool, you immediately run a Traceflow test to diagnose the error you've been facing. Within moments, Traceflow generates a diagram showing the exact path the packets are taking and highlighting a misconfiguration in one of the network policies.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/tf_graph_failure.png"}
        style={{ maxHeight: '500px' }}
        alt={'Smiling Software Engineer'}
      />
      <p>
        Armed with this information, you quickly make the necessary adjustments to the network policy, and just like that, the error is resolved. Traceflow not only saved you hours of troubleshooting but also provided a level of visibility into your network that you never had before. From that day on, Traceflow becomes an indispensable tool in your network troubleshooting arsenal, ensuring that you can quickly and effectively diagnose and resolve network issues in your Kubernetes cluster.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/smiling-sde.jpg"}
        style={{ maxHeight: '300px' }}
        alt={'Smiling Software Engineer'}
      />
      <p>
        Traceflow was not included in Antrea firstly. At the start of my internship, traceflow was proposed to be part of Antrea, and I took on this task with other coworkers together. 3 months later, traceflow was included in Antrea v0.8.0 release as a brand new feature.
      </p>

      <Title level={2}>Design and Implementation</Title>
      <p>
        In developing Antrea Traceflow, we utilized <a href={"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"}><b>Kubernetes CRD</b></a> (Custom Resource Definitions) to define a custom resource that represents a traceflow request. Kubernetes CRD (Custom Resource Definitions) extend the Kubernetes API to create new resource types that are specific to an application or use case. For example, in the following diagram, we define a new type of resources called "alert", and let an external controller take care of the management of it. Then, we could use standard Kubernetes API or commands such as <code>kubectl get</code> on "alert"s too.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/crd.png"}
        style={{ maxHeight: '600px' }}
        alt={'kubernetes CRD'}
      />
      <p>
        For Antrea Traceflow, we define a new kind of CRD called "Traceflow." This allows Antrea users to create a new traceflow using Kubernetes API commands in the CLI, such as <code>kubectl apply -f traceflow-configuration-file</code>, where users can specify details like the source and destination of the packet, and the network protocol used for packet transportation. Additionally, users can create a traceflow using Antrea's command line API, for example, <code>antctl tf -S source -D destination</code>. After the CRD creation request is received by Antrea, Antrea will execute the traceflow and output the results in YAML format.
      </p>
      <p>
        Here is an example traceflow command input and its output:
      </p>
      <p>
        <code>antctl tf -S busybox0 -D busybox1</code>
      </p>
      <Flex justify={'flex-start'} style={{
        textAlign: 'left',
        padding: "0 7%",
      }}>
        <CodeBlock
          text={String.raw`name: busybox0-to-busybox1-fpllngzi
phase: Succeeded
source: default/busybox0
destination: default/busybox1
results:
- node: antrea-linux-testbed7-1
  timestamp: 1596435607
  observations:
  - component: SpoofGuard
    action: Forwarded
  - component: Forwarding
    componentInfo: Output
    action: Delivered`}
          language={'yaml'}
          showLineNumbers={true}
        />
      </Flex>
      <p>
        From the result above, we can see that the packet went through 2 stages, SpoofGuard and Forwarding, before finally delivered to destination.
      </p>

      <p>
        If you prefer a graphical UI over commands, we also offer a web version of Traceflow based on <a href={"https://octant.dev/"}><b>Octant</b></a>, a web tool for visualizing Kubernetes. Users simply fill out a form and submit it. Antrea then generates the traceflow CRD and draws the traceflow result in a diagram according to the user's request. Here's a screenshot of the form, and a screenshot of the result diagram:
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/ui.png"}
        style={{ maxHeight: '500px' }}
        alt={'kubernetes CRD'}
      />
      <p/>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/tf_graph_success.png"}
        style={{ maxHeight: '600px' }}
        alt={'kubernetes CRD'}
      />
      <p>
        You might be wondering, what happens after a traceflow CRD is created? How do we get the diagram of a packet's trace from a specific source to destination? Here are the steps we follow after a traceflow CRD is created, via command line or web UI, in Antrea running instances and related software:
      </p>
      <p>
        <ol>
          <li>The creation request of the traceflow CRD is received by the Antrea controller. The controller validates the content of the CRD and creates it if it is valid.</li>
          <li>Specific flows (network policies) are installed in OVS (Open vSwitch). They would be applied to the packets that the user wants to trace. This ensures that when we inject a simulated packet later, it will be processed by the flows, and the stats of the flows will record the behavior of the packet.</li>
          <li>The Antrea agent on the source node injects a new network packet based on input properties, such as the network protocol.</li>
          <li>The injected packet goes through specific flows in OVS (Open vSwitch), and ultimately will either be delivered or dropped. Antrea agents on both the source and destination node observe the stats of the flows installed in OVS and report their observations to the Antrea controller.</li>
          <li>The Antrea controller receives the reports from the agents, organizes the results, stores them in the traceflow CRD, and returns the results to the command line interface or Octant webpage.</li>
          <li>The UI (command or web) translates the observations into human-readable text or a diagram and outputs it.</li>
        </ol>
      </p>


      <Title level={2}>Development Challenges</Title>
      <p>
        The development of Antrea Traceflow was a challenging yet rewarding process that required careful attention to detail and collaboration across teams. One of the key moments in the development process was the demo meeting where I presented the project to my manager and coworkers. While I was proud of the progress made, their feedback highlighted areas for improvement. They suggested simplifying the color theme of the result diagram and enhancing the clarity of error messages for CLI inputs. I accepted this feedback wholeheartedly and began implementing these changes to enhance the usability and visual appeal of the project.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/tf-color.png"}
        style={{ maxHeight: '500px' }}
        alt={'kubernetes CRD'}
      />
      <p></p>
      <i>2 Example Traceflow Diagarams, Before and After the Demo Meeting</i>
      <p>
        Another critical aspect of the development process was the collaboration with the Octant team, who maintained the Web UI that Antrea Traceflow depended on. During the development, I encountered a bug in Octant that could have impacted the functionality of Traceflow. I <a href={"https://github.com/vmware-archive/octant/issues/1427"}>reported this bug</a> to the Octant team, and despite the setback, I adjusted my schedule to work on other tasks until the bug was fixed. This collaboration ensured that the project stayed on track and was completed on schedule.
      </p>
      <p>
        The feedback from the demo meeting and the collaboration with the Octant team were instrumental in shaping the final version of Antrea Traceflow. The simplified color theme of the result diagram and the clearer error messages for CLI inputs improved the overall user experience of the project. Additionally, the bug fix in Octant ensured that the Web UI of Traceflow functioned correctly, further enhancing the project's functionality and reliability.
      </p>

      <Title level={2}>Project Outcome</Title>
      <p>
        The culmination of these efforts was the presentation of Antrea Traceflow at the VMware intern poster session. The project was well-received, and I was honored to win the <b>No.1 spot for the Most Innovative Project</b> out of all interns in my office. This success was a testament to the hard work and dedication put into the development process, as well as the importance of accepting feedback and collaborating effectively with other teams.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/traceflow/award.jpg"}
        style={{ maxHeight: '300px' }}
        alt={'Most Innovative Project Award'}
      />
      <p/>
      <p>
        Overall, the development of Antrea Traceflow was a valuable learning experience that taught me the importance of continuous improvement, collaboration, and adaptability in software development. It also underscored the significance of user feedback in shaping the final product and the impact of effective teamwork in achieving project goals.
      </p>

      <Title level={2}>Review & Learnings</Title>
      <p>
        As a software intern with no prior knowledge of containers and Kubernetes, developing Antrea Traceflow with my coworkers was a transformative learning experience. Initially, I dove into understanding the basics of containers and Kubernetes, then I gained a deeper understanding of how Kubernetes can be extended to support custom resources and controllers using Kubernetes CRD (Custom Resource Definitions). This process involved grasping concepts like pods, networking, and network policies within Kubernetes.
      </p>
      <p>
        Working alongside my coworkers, I gained practical experience in developing software in a team setting. Through collaboration and receiving feedback on my initial version of Traceflow, I learned the importance of communication and iteration in software development. The feedback helped me improve the design and functionality of Traceflow, honing my problem-solving skills and understanding of best practices in software development.
      </p>
      <p>
        Overall, this project not only taught me the technical aspects of containerization, Kubernetes, and networking but also provided valuable insights into teamwork and collaboration in a professional software development environment.
      </p>

    </Typography>
  )
}

export default Traceflow;