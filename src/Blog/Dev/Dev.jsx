import React from 'react';
import {Flex, Image, Table, Typography} from "antd";

import '../blog.css'
import {CheckOutlined, CloseOutlined} from "@ant-design/icons";

function Dev(props) {
  const {Title, Paragraph} = Typography;

  const tableIconRender = (text) => text === 1 ? <CheckOutlined /> : <CloseOutlined />

  const columns2 = [
    {
      title: 'App Name',
      dataIndex: 'app',
      key: 'app',
      render: (text) => <b>{text}</b>,
      width: 133,
    },
    {
      title: 'Most Successful Point',
      dataIndex: 'success',
      key: 'success',
    },
    {
      title: 'Least Successful Point',
      dataIndex: 'failure',
      key: 'failure',
    },
  ]

  const dataSource2 = [
    {
      app: 'Spotify',
      success: String.raw`Spotify's implementation of rich features, such as the ability to sort playlists in multiple orders, view them in various visual modes, and add songs to multiple playlists simultaneously, significantly enhances the usability`,
      failure: String.raw`Playlists cannot be directly shared on social media platforms like Facebook and Twitter, making it more challenging for users to share their music preferences.`,
    },
    {
      app: 'Apple Music',
      success: String.raw`The use of icons is pervasive in every feature implemented for playlists, which enhances learnability and usability. For instance, in the playlist menu, there is an icon for almost every choice, making it easier for users to understand each option and differentiate between similar choices (such as "Play Next" vs "Play Later").`,
      failure: String.raw`The least successful aspect is related to filtering and sorting. Playlists cannot be filtered or sorted by users, indicating a low level of operability on the website. Playlists can only be sorted in the default order by name, but this results in errors when names contain multiple languages. For example, the playlist titled in Japanese is always sorted to the last behind other English titled playlists, highlighting accessibility issues for multiple languages.`,
    },
    {
      app: 'Amazon Music',
      success: String.raw`They are the only website among all three that can recommend songs based on your playlist. This allows for more detailed, personalized recommendations based on different playlists, rather than just songs listened to by a user generally.`,
      failure: String.raw`The website is visually monotonous and lacks attractiveness. All playlists are laid out in grids, with their covers being one or some of the covers of the songs in the playlist. The default layout and covers cannot be personalized. With few playlists created, the right part of the screen is completely empty below the header.`,
    },
  ]

  const columns = [
    {
      title: 'Feature',
      dataIndex: 'feature',
      key: 'feature',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'Spotify',
      dataIndex: 'spotify',
      key: 'spotify',
      render: tableIconRender,
    },
    {
      title: 'Apple Music',
      dataIndex: 'apple',
      key: 'apple',
      render: tableIconRender,
    },
    {
      title: 'Amazon Music',
      dataIndex: 'amazon',
      key: 'amazon',
      render: tableIconRender,
    },
  ]

  const dataSource = [
    {
      feature: 'Add a Song to a Playlist',
      spotify: 1,
      apple: 1,
      amazon: 1,
    },
    {
      feature: 'Add/Edit Playlist Description',
      spotify: 1,
      apple: 1,
      amazon: 0,
    },
    {
      feature: 'Share Playlist to Social Media',
      spotify: 0,
      apple: 1,
      amazon: 1,
    },
    {
      feature: 'Customized Playlist Sorting',
      spotify: 1,
      apple: 0,
      amazon: 0,
    },
    {
      feature: 'Add Song to Multiple Playlists At One Time',
      spotify: 1,
      apple: 0,
      amazon: 0,
    },
    {
      feature: 'Play Songs Similar to Songs in Playlists',
      spotify: 0,
      apple: 0,
      amazon: 1,
    },
  ];

  return (
    <Typography style={{
      padding: "0 7%"
    }}>
      <Title>Album Library Page Development</Title>
      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Abstract</b> Imagine you're exploring different music streaming services like Spotify, Apple Music, and Amazon Music, trying to decide which one to use. You notice that each service has its own way of organizing and presenting playlists, making it easy or difficult to find your favorite albums. In a design project similar to this scenario, I analyzed these services to understand what works well and what could be improved. Using this knowledge, I then created a new interface where you can easily favorite albums, filter them by genre and release date, and sort them by title, artist, or year in a sidebar. For tablet and mobile devices, the layout was adjusted to place the sidebar under the title and the album library is put below it, ensuring a responsive design. Check out my final work <a href={"https://cs1300-ass4.vercel.app/"}>here</a>.
      </Paragraph>

      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Role</b> Product Manager + Frontend Engineer
      </Paragraph>

      <Paragraph style={{
        textAlign: "left",
        fontSize: "17px",
      }}>
        <b>Time</b> March 2024 (2 Weeks)
      </Paragraph>

      <p>
        Have you ever wondered if the favorite feature of a music app could be improved? I certainly have, which is why I decided to redesign the UI of the album favoriting feature and implement my own version based on competitive analysis. The result is a revamped album favoriting feature that enhances the overall user experience, offering a more intuitive and efficient way to manage favorite albums. Below is the steps I follow.
      </p>

      <Title level={2}>Competitive Analysis Research</Title>
      <p>
        Before starting development, it is crucial to conduct a competitive analysis to gather insights into what features and functionalities competitors are offering, and how they are perceived by users. Competitive analysis is a process of evaluating and comparing the strengths and weaknesses of competing products or services in the market. It helps in understanding the market landscape, identifying opportunities for improvement, and making informed decisions for product development.
      </p>
      <p>
        For example, in the context of the favorite feature of music streaming services, comparing Spotify, Apple Music, and Amazon Music would help in understanding the different approaches they take to playlist features, user interface design, and overall user experience. I created a table comparing the features offered by desktop websites of Spotify, Apple Music, and Amazon Music, then analyzed the most and least successful points for each service. This information can then be used to inspire the development of my own interface that offers unique and compelling features.
      </p>

      <Flex justify={'center'}>
        <Table dataSource={dataSource} columns={columns} pagination={{
          hideOnSinglePage: true,
        }} style={{maxWidth: '1000px'}}/>
      </Flex>
      <p/>
      <Flex justify={'center'}>
        <Table dataSource={dataSource2} columns={columns2} pagination={{
          hideOnSinglePage: true,
        }}/>
      </Flex>

      <p>
        The tables above surely inspired me to add extra features for my design. Inspired by Apple Music's least successful point, I decided to include a sorting feature for albums in my app, allowing users to sort by title, artist, or release year. To address Amazon Music's least successful point, I ensured that albums in my app are evenly spaced when displayed in a single row, avoiding empty spaces and creating a more visually appealing layout.
      </p>


      <Title level={2}>Design</Title>
      <p>
        After conducting a thorough competitive analysis, I had a clear vision for the final design of my app. I aimed to create an album library page within a music streaming service that would allow users to easily favorite or remove albums from their collection. Additionally, users would have the ability to filter and sort albums based on various criteria, enhancing the overall usability of the page.
      </p>
      <p>
        The page is titled "My Albums," with albums displayed in the left part of the page under the title, occupying most of the space. Other features such as filtering, sorting, and an aggregator are placed in the right part of the page. Depending on the genres of albums, we collect genre tags for users to filter. Users can also filter albums by setting the release time range. We provide three sorting keys for albums: title, artist, and year. For tablet and mobile devices, we move the sidebar directly under the title and place the album library under the sidebar.
      </p>

      <Title level={2}>Implementation</Title>
      <p>
        With the design finalized, I began the implementation process by writing components in React, including AlbumLib, AlbumCard, and FilterButton. These components were then combined in the main JS file, where I dynamically updated states and variables in response to user interactions. This allowed for real-time modifications to the page based on user actions, providing a more interactive experience.
      </p>
      <p>
        Sorting functionality was implemented by firstly sorting albums based on the user-selected key in [artist, title, year]. To resolve any ties, additional keys were used in a predetermined order. For filtering, a boolean field "filtered" was added to each album, which was updated whenever the filter condition was changed. These implementation details were crucial in ensuring the functionality and usability of the app, allowing users to easily manage and navigate their album collection.
      </p>

      <Title level={2}>Final Work</Title>

      <p>Finally, after coding, it's time to show the completed work! Here's the link to <a href={"https://cs1300-ass4.vercel.app/"}>final work</a>, and the screenshot of it:</p>

      <Image
        src={process.env.PUBLIC_URL + "/images/dev/app.png"}
        style={{ maxHeight: '600px' }}
        alt={'speed sketches'}
      />

      <p>
        In the final work, several key improvements were made to enhance user experience and responsiveness.
      </p>
      <p>
        When there's only one row displaying albums, all albums are evenly spaced in that row, ensuring a visually pleasing layout:
      </p>

      <Image
        src={process.env.PUBLIC_URL + "/images/dev/app-row.png"}
        style={{ maxHeight: '350px' }}
        alt={'speed sketches'}
      />

      <p>
        For tablet and mobile devices, the layout is optimized with the title, sidebar, and album library arranged in a single column:
      </p>

      <Image
        src={process.env.PUBLIC_URL + "/images/dev/app-tablet.png"}
        style={{ maxHeight: '700px' }}
        alt={'speed sketches'}
      />

      <p>
        This responsive design ensures that the page is user-friendly and accessible across a variety of devices, providing a seamless experience for users regardless of their device.
      </p>


      <Title level={2}>Review & Learnings</Title>
      <p>
        Through this project, I gained valuable insights into the design and development process of a web application, particularly in the context of music streaming services. I learned the importance of conducting thorough competitive analysis to identify strengths and weaknesses in existing designs, which served as a foundation for my own design decisions. Additionally, I honed my skills in frontend development, particularly in React, by implementing various components and features to create a functional and responsive interface. Overall, this project taught me the significance of user-centered design and the iterative process of refining a product to meet user needs and preferences.
      </p>


    </Typography>
  )
}

export default Dev;