import {
  ToolFilled,
  DribbbleOutlined,
  LinkedinFilled,
  GithubFilled,
  MailFilled,
  CodeFilled,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { Collapse } from "antd";
import { useState } from "react";

function copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const onChange = (key) => {
    setTimeout(() => handleScrollToBottom(), 190);
  };
  const handleScrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className="pageContainer">
      <div className="about">
        <div className="aboutProfPicContainer">
          <img
            className={`aboutProfPic${isLoaded ? " loaded" : ""}`}
            src="/siteImages/LC_headshotSmall_150x150.png"
            alt="Profile"
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="aboutProfPicPlaceholder">
              {/* Placeholder content, e.g. "Loading..." or a spinner */}
            </div>
          )}
        </div>
        <h3>Larson Collier</h3>
        {/* <h2>Brooklyn, NY</h2> */}
        <div className="contactIcons">
          <a
            href="https://www.linkedin.com/in/larson-collier/"
            style={{ color: "inherit" }}
          >
            <LinkedinFilled />
          </a>
          <a href="https://github.com/larswan" style={{ color: "inherit" }}>
            <GithubFilled />
          </a>
          <a
            href="#"
            style={{ color: "inherit", cursor: "pointer" }}
            onClick={(event) => {
              event.preventDefault();
              const email = "collierlarson@gmail.com";

              const tempInput = document.createElement("input");
              tempInput.value = email;

              document.body.appendChild(tempInput);
              tempInput.select();
              tempInput.setSelectionRange(0, email.length);

              document.execCommand("copy");
              document.body.removeChild(tempInput);
              alert("E-mail copied to clipboard: collierlarson@gmail.com");
            }}
          >
            <MailFilled />
          </a>
        </div>
        <hr></hr>
        <p>
          Hi, I'm a software developer born and raised in Atlanta, GA, now
          living in New York City. Throughout my life I've enjoyed drawing,
          playing music, and inventing little things.
          <br></br>
          <br></br>
          In my time at the University of Georgia I played in a variety of
          bands, writing and recording music and releasing it under the banner
          of{" "}
          <a
            href="https://open.spotify.com/playlist/53nsHFvlSpYtABQ9paQolK?si=25d22568316d412b"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <b>Goe Bidem Records</b>
          </a>
          . I began creating cartoons, animations, and music under the pseudonym{" "}
          <a
            href="https://open.spotify.com/artist/087EadRmsB55nFpxzgHljT?si=bl9vKIhtS8GRWRu4imx37g"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <b>Blanko</b>
          </a>{" "}
          and my music video "
          <a
            href="https://www.youtube.com/watch?v=ktLZu3rV88I"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <b>Hallelujah</b>
          </a>
          " was selected for the Indie Grits Film Festival. During this time I
          also designed and prototyped an accessory for guitar players called
          Pickit that won the 2016 UGA Idea Accelerator Program.
          <br></br>
          <br></br>
          Following college I worked a variety of positions in the film and
          music industries from snake wrangler to audio engineer and art
          director, as well as doing freelance video-editing and design work.
          <br></br>
          <br></br>
          After moving to New York I decided to make a career change. My goal
          was to find a path that involved creativity and complex problem
          solving; so when a friend told me about his work as a software
          engineer I recognized it as a career where I could leverage the skills
          in ideation and collaboration that I'd developed.
          <br></br>
          <br></br>
          Problem solving gives me loads of energy, as does creative
          collaboration, and software engineering provides the perfect
          combination of these elements of work. I’m excited to be part of a
          constantly evolving discipline that provides so many opportunities to
          build and innovate.
        </p>
        <Collapse
          className="aboutCollapse"
          defaultActiveKey={[]}
          onChange={onChange}
          items={[
            {
              label: (
                <span>
                  <CodeFilled />
                  <> </>Technologies
                </span>
              ),
              key: 1,
              children: (
                <ul>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>React Native</li>
                  <li>SCSS</li>
                  <li>Python</li>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>PHP</li>
                  <li>WordPress</li>
                  <li>PostgreSQL</li>
                  <li>Flask, Django</li>
                  <li>Express, Next</li>
                  <li>SQLite3</li>
                  <li>Node.js</li>
                  <li>Git, REST API, HTML, CSS</li>
                </ul>
              ),
            },
            {
              label: (
                <span>
                  <ToolFilled />
                  <> </>Programs
                </span>
              ),
              key: 2,
              children: (
                <ul>
                  <li>Figma</li>
                  <li>
                    Adobe Suite
                    <ul style={{ listStyleType: "circle" }}>
                      {/* <li>Suite</li> */}
                      <li>Photoshop</li>
                      <li>Premier</li>
                      <li>Illustrator</li>
                    </ul>
                  </li>
                  <li>Excel</li>
                  <li>Ableton Live</li>
                  <li>Logic Pro</li>
                  <li>ProTools</li>
                </ul>
              ),
            },
            {
              label: (
                <span>
                  <DribbbleOutlined />
                  <> </>Skills & Hobbies
                </span>
              ),
              key: 3,
              children: (
                <ul>
                  <li>Guitar</li>
                  <li>Drums</li>
                  <li>Bass</li>
                  <li>Whistling</li>
                  <li>Drawings</li>
                  <li>Basketball</li>
                  <li>Zelda</li>
                  <li>SSB64</li>
                  <li>Making mashups</li>
                  <li>Doing bits</li>
                </ul>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
