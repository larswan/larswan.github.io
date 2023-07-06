import { ToolFilled, AppleOutlined, LinkedinFilled, GithubFilled, MailFilled, CodeFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Collapse } from 'antd';


const About = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="pageContainer">
            <div className="about">

                <div className="leftAbout">
                    <img id="aboutProfPic" src="public/siteImages/headshot.jpg"/>
                    <h3>Larson Collier</h3>
                    <LinkedinFilled />
                    <GithubFilled />
                    <MailFilled />
                </div>
                <div className="rightAbout">
                    <p>Creative and adaptable front-end web developer with a diverse background in content creation, film, and service industry. Through my prior professional experiences I've learned to easily adapt into different team settings, give and receive feedback, and problem-solve under pressure. As a life-long artist I value style and design in the presentation of applications.</p>
                    <p>My passions for building things and solving problems led me to software development, which is a perfect outlet for me. I'm constantly learning and creating new things. You can find examples of work linked in the featured section below.</p>
                    <p>Aside from programming I record music, draw and make traditional style animations. Feel free to contact me at collierlarson@gmail.com!</p>
                </div>
                <Tabs defaultActiveKey="1"
                    type="card"
                    items={
                        [
                            {label: (
                                <span>
                                    <CodeFilled />
                                    Technologies 
                                </span>
                            ),
                            key: 1,
                            children: 
                            <ul>
                                    <li>React.js</li>
                                    <li>Ruby/Ruby on Rails</li>
                                    <li>Flask, Django</li>
                                    <li>Express, Next</li>
                                    <li>Python</li>
                                    <li>SQLite3</li>
                                    <li>Node.js</li>
                                    <li>Git, REST API, JavaScript, HTML, CSS</li>
                            </ul>,},
                            {label: (
                                <span>
                                    <ToolFilled />
                                    Programs 
                                </span>
                            ),
                            key: 2,
                            children: 
                            <ul>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premier</li>
                                <li>Adobe Illustrator</li>
                                <li>Ableton Live</li>
                                <li>Logic Pro</li>
                                <li>ProTools</li>
                            </ul>
                            },
                            {label: (
                                <span>
                                    <AppleOutlined />
                                    Tab 3
                                </span>
                            ),
                            key: 3,
                            children: `Tab 3 Content`,},
                            
                        ]
                        }/>
                {/* <Collapse defaultActiveKey={[]} onChange={onChange} items={
                    [
                        {
                            label: (
                                <span>
                                    <CodeFilled />
                                    Technologies
                                </span>
                            ),
                            key: 1,
                            children:
                                <ul>
                                    <li>React.js</li>
                                    <li>Ruby/Ruby on Rails</li>
                                    <li>Flask, Django</li>
                                    <li>Express, Next</li>
                                    <li>Python</li>
                                    <li>SQLite3</li>
                                    <li>Node.js</li>
                                    <li>Git, REST API, JavaScript, HTML, CSS</li>
                                </ul>,
                        },
                        {
                            label: (
                                <span>
                                    <ToolFilled />
                                    Programs
                                </span>
                            ),
                            key: 2,
                            children:
                                <ul>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Premier</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Ableton Live</li>
                                    <li>Logic Pro</li>
                                    <li>ProTools</li>
                                </ul>
                        },
                        {
                            label: (
                                <span>
                                    <AppleOutlined />
                                    Tab 3
                                </span>
                            ),
                            key: 3,
                            children: `Tab 3 Content`,
                        },

                    ]
                } /> */}
                
            </div>
        </div>
    )
}

export default About