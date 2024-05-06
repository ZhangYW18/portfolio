import React from 'react';
import {Image, Typography} from "antd";

import '../blog.css'

function Redesign(props) {
  const {Title, Paragraph, Link, Text} = Typography;

  return (
    <Typography style={{
      padding: "0 7%",
      fontSize: "17px",
    }}>
      <Title>Responsive Redesign</Title>
      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Abstract</b> Have you ever felt frustrated when trying to navigate a website that just doesn't seem to work well on your phone or tablet? As someone who spends a lot of time online, I've noticed that many websites, even those of reputable businesses like local clinics, can be difficult to use and visually unappealing. That's why I took on the challenge of redesigning the home webpage of a local clinic called "Primary Walkin Medical Center." I wanted to make it more user-friendly and visually appealing, ensuring that it works well on all devices. This project involved identifying usability problems, creating sketches and designs, and finally implementing the changes to improve the website's overall experience.
      </Paragraph>
      <p>
        Check out the <a href={"https://primarywalkinmedical.com/"}>old homepage</a> and <a href={"https://zhangyw18.github.io/cs1300_ass2/"}>redesigned homepage</a> to see how great the change is.
      </p>

      <Title level={2}>Usability & Accessibility Problems</Title>
      <p>
        As a web user, it's frustrating to encounter websites that are difficult to navigate and visually unappealing. Common accessibility problems include small or hard-to-read text, lack of alternative text for images, and confusing navigation menus. These issues can make it challenging for users with disabilities to access the content. Visually unpleasant websites often have cluttered layouts, overwhelming colors, and inconsistent design elements. These problems not only make it difficult to find information but also create a poor user experience. The <a href={"https://primarywalkinmedical.com/"}>homepage of Primary Walkin Medical Center</a> is a great example of the websites which suffers from a variety of usability and accessibility issues that hinder its effectiveness and user experience. Here's the screenshot of it:
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/redesign/origin.png"}
        style={{ maxHeight: '1600px' }}
        alt={'Antrea structure'}
      />
      <p/>
      <i>Screenshot of Original Homepage</i>
      <p>
        One notable problem is the inefficiency in presenting crucial information. For example, the address and map of the medical center are separated on the webpage, requiring users to scroll down to find the map, which could be easily consolidated for quicker access. Similarly, the hours of operation for the medical center and laser skincare services are presented separately, adding unnecessary complexity and increasing the time users need to spend navigating the page.
      </p>
      <p>
        The webpage also lacks visual appeal and symmetry, with the left bottom half largely blank, creating an unbalanced layout that can be unappealing to users. Additionally, the placement of the "Pages" section, which lists all available links, in the right bottom corner is unconventional and makes it difficult for users to locate important information. This section could be better placed in the footer area for easier access.
      </p>
      <p>
        Accessibility is another significant issue on the webpage. Some images lack alt text, which is crucial for users with visual impairments who rely on screen readers to access content. The use of grey text on a white background and the excessive use of capital letters further contribute to accessibility challenges, making it difficult for users to read the content easily.
      </p>
      <p>
        Overall, these usability and accessibility issues make the webpage of Primary Walkin Medical Center poorly accessible for all users, including those with disabilities, and detract from its overall effectiveness in providing information to visitors.
      </p>

      <Title level={2}>Visual Redesign</Title>
      <Title level={3}>Sketches</Title>

      <p>Having analysed the problems, the next step in my redesign is sketching. Overall, sketching proved to be a valuable exercise in generating ideas and exploring design possibilities for the Primary Walkin Medical Center's homepage. It allowed me to quickly iterate through different concepts and refine my ideas, ultimately leading to a more informed and thoughtful approach to the visual redesign.</p>

      <Title level={4}>Speed Sketches</Title>
      <p>
      As a crucial step in the visual redesign of the Primary Walkin Medical Center's homepage, I embarked on a series of speed sketches firstly to explore various design possibilities quickly and efficiently. Using pen and paper, I created nine different redesign options within a 3x3 grid, with each sketch taking no longer than one minute. This exercise allowed me to brainstorm and visualize different layouts, elements, and ideas for the webpage in a short amount of time.
      </p>

      <Image
        src={process.env.PUBLIC_URL + "/images/redesign/sketch1.jpg"}
        style={{ maxHeight: '1000px' }}
        alt={'speed sketches'}
      />

      <p>
      Speed sketching is an essential part of the design process as it allows designers to generate a wide range of ideas rapidly. While not all sketches are refined or detailed, they serve as a starting point for further development and exploration. These initial sketches help in identifying promising concepts and design directions that can be further refined in later stages of the redesign process.
      </p>

      <Title level={4}>Final Sketch</Title>

      <p>
      Following the speed sketching phase, I analyzed my sketches to identify elements that stood out and resonated with the design goals for the webpage. I then created a final sketch that incorporated the most promising design elements from the initial sketches. This final sketch served as the foundation for the visual redesign, providing a clear direction for the next steps in the process, such as wireframing and prototyping.
      </p>

      <Image
        src={process.env.PUBLIC_URL + "/images/redesign/sketch2.jpg"}
        style={{ maxHeight: '1000px' }}
        alt={'final sketch'}
      />

      <Title level={3}>Low-Fidelity Wireframes (<a href="https://www.figma.com/file/nUw2ulbdktKFMLa9DRyxPh/Primary-Walk-in-Clinic---LoFi?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=Za8EHSa1L5LAJWlC-1">Figma Link</a>)</Title>

      <p>
        Low-fidelity (lo-fi) wireframes are simplified, basic representations of a webpage or app layout, typically created using pen and paper or digital tools. They are needed after the final sketch to further refine the design and layout before moving on to high-fidelity mockups. Lo-fi wireframes focus on the overall structure and layout of the interface, without getting into detailed design elements like colors, fonts, or images.
      </p>
      <p>
        For the redesign of the Primary Walkin Medical Center's homepage, I created three versions of lo-fi wireframes for desktop, tablet, and mobile devices. These wireframes served as a blueprint for the final design, helping to ensure consistency and usability across different screen sizes and devices. In these wireframes, I also attempted to solve the accessibility and usability problems identified earlier, and I included annotations to explain these solutions, ensuring that the design improvements were clear and well-documented.
      </p>

      <p>I will only show the desktop version of lofi wireframe here. All 3 versions are included in this <a href="https://www.figma.com/file/nUw2ulbdktKFMLa9DRyxPh/Primary-Walk-in-Clinic---LoFi?type=design&amp;node-id=0%3A1&amp;mode=design&amp;t=Za8EHSa1L5LAJWlC-1">Figma Link</a>. Here is the screenshot for desktop version's website with annotations:</p>
      <Image
        src={process.env.PUBLIC_URL + "/images/redesign/lofi-desktop.jpg"}
        style={{ maxHeight: '1400px' }}
        alt={'final sketch'}
      />

      <Title level={3}>Style Guide & High-Fidelity Wireframes (<a href="https://www.figma.com/file/ne1VWYiCxl5PMYBSfEug1z/Primary-Walk-in-Clinic?type=design&node-id=66-30&mode=design&t=JiR1gU510BpKOBtW-0">Figma Link</a>)</Title>

      <p>
        In the next stage of the redesign process for the Primary Walkin Medical Center's homepage, I created high-fidelity (hi-fi) wireframes and a style guide.
      </p>

      <Title level={4}>Style Guide</Title>
      <p>
        The style guide serves as a reference for maintaining consistency across the website, ensuring that all design elements are cohesive and aligned with the brand identity. It also provides guidelines for future updates and additions to the website, making it easier for other designers or developers to maintain the design integrity.
      </p>
      <p>
        For the style guide, I meticulously crafted a comprehensive document that outlined the visual elements and design principles to be used throughout the Primary Walkin Medical Center's homepage redesign. This included defining the color palette, typography choices, section styles, and other visual elements.
      </p>

      <Image
        src={process.env.PUBLIC_URL + "/images/redesign/hifi-guide.jpg"}
        style={{ maxHeight: '1400px' }}
        alt={'final sketch'}
      />

      <Title level={4}>High-Fidelity Wireframes (<a href="https://www.figma.com/file/ne1VWYiCxl5PMYBSfEug1z/Primary-Walk-in-Clinic?type=design&node-id=1%3A3&mode=design&t=WP0PMzrSSa3LypCn-1">Figma Link</a>)</Title>

      <p>
        Hi-fi wireframes are detailed, polished versions of the lo-fi wireframes, incorporating the actual visual design elements and content that will be used in the final product. By creating hi-fi wireframes for desktop, tablet, and mobile versions of the website, I ensured that the design was responsive and optimized for various screen sizes. The hi-fi wireframes served as a blueprint for the final development of the website, guiding the implementation of design elements and ensuring that the end product met the design goals and user requirements.
      </p>
      <p>
        In the high-fidelity (hi-fi) wireframes, I translated the finalized design concepts from the lo-fi wireframes and style guide into detailed, pixel-perfect representations of the website layout. These hi-fi wireframes included actual content, images, and interactive elements, providing a realistic preview of how the website would look and function.
      </p>
      <p>
        Here's the screenshot of the desktop version hifi wireframe. All 3 hifi wireframes are accessible in <a href="https://www.figma.com/file/ne1VWYiCxl5PMYBSfEug1z/Primary-Walk-in-Clinic?type=design&node-id=1%3A3&mode=design&t=WP0PMzrSSa3LypCn-1">Figma Link</a> here.
      </p>
      <Image
        src={process.env.PUBLIC_URL + "/images/redesign/hifi-desktop.jpg"}
        style={{ maxHeight: '1200px' }}
        alt={'final sketch'}
      />

      <Title level={2}>Design Tradeoffs</Title>
      <p>
        During the design process for the Primary Walkin Medical Center's homepage, I encountered several tradeoffs that required careful consideration.
      </p>
      <p>
        One of the key tradeoffs was between aesthetics and usability. While it was important to create a visually appealing design, it was equally important to ensure that the website was easy to navigate and understand. To achieve the tradeoff, I focused on creating a clean and intuitive design that prioritized ease of navigation in header and footer. I used a simple color palette (various shades of pink color) and typography to maintain a professional look while ensuring that the content was easy to read and understand. Additionally, I carefully considered the placement of elements and the overall layout to create a visually appealing design that also emphasized usability.
      </p>
      <p>
        Another tradeoff was between simplicity and functionality. While adding more features and elements could enhance the website's functionality, it could also make it more complex and difficult to use. For this, I took a user-centered approach, prioritizing the most important features for users and content while keeping the design streamlined and uncluttered. I asked for feedback from other people to figure out the most critical features. I also hide complex or less frequently used features like page links in footer, ensuring that the website remained simple and intuitive for users.
      </p>

      <Title level={2}>Implementation</Title>
      <p>
        Final step after design is implementation. I successfully implemented the redesigned homepage of Primary Walkin Medical Center based on the high-fidelity (hi-fi) wireframes and style guide. The implementation followed the guidelines set in the style guide, ensuring consistency and coherence in the design across all elements of the webpage. The website is now responsive and user-friendly, satisfying the needs of mobile, tablet, and desktop users alike. You can view the <b>final work <a href={"https://zhangyw18.github.io/cs1300_ass2/"}>here</a></b>.
      </p>

      <Title level={2}>Learnings</Title>
      <p>
        Throughout the process of redesigning the Primary Walkin Medical Center's homepage, I have learned valuable lessons that have enhanced my design skills. I have gained a deeper understanding of the importance of user-centered design principles and the need to balance aesthetics with usability. Additionally, I have honed my skills in creating wireframes, style guides, and high-fidelity mockups, gaining a better understanding of how these tools contribute to the overall design process. Furthermore, I have expanded my knowledge of frontend techniques like HTML and CSS, which have been instrumental in implementing the design changes effectively. Overall, this experience has been incredibly rewarding, and I look forward to applying these learnings to future projects as a software engineer.
      </p>
    </Typography>
  )
}

export default Redesign;