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
                
                <img className="aboutProfPic" src="public/siteImages/headshot.jpg"/>
                <h3>Larson Collier</h3>
                <div className="contactIcons">
                    <LinkedinFilled />
                    <GithubFilled />
                    <MailFilled />
                </div>
                <hr></hr>
                <p>
                    Hi, I’m Larson a software develper born adn raised in Atlatna, Ga now living in New York City. Throughtout my life I’ve enjoyed drawing and playing music.
                    <br></br><br></br>
                    In my time at the University of Georgia in Athens I played in a vareity of bands, write and recording music and releasing it under the banner of Goe Bidem Records (link this to spotify playlist). At the time Joe Biden was a goofy former Vice President so it came off different. I also began creating cartoons and animations under the pseudonym Blanko. During this time I also designed and prototyped an accesory for guitar players called Pickit that won the 2016 UGA Idea Accelerator Program.
                    <br></br><br></br>
                    Following college I worked a variety of positions in the film and music industries from snake wrangler to audio engineer and art director. I continued creating music, cartoons and animatons as well as doing freelance video-editing and design work.
                    <br></br><br></br>
                    After moving to New York I decided to make a career change______ . My goal was to find a path that involved creativity and complex problem solving, and when a friend told me about his work as a software engineer I saw it as a perfect match.
                    <br></br><br></br>
                    Ideation gives me loads of energy, as does creative collaboritaion, and software engineering  provides the perfect vehicle. I’m excited to be part of a constantly evolving discipline that provides so many opprotunities to build and innovate. 
                </p>
            
                <Tabs defaultActiveKey="1"
                    type="card"
                    // fontSize="10"
                    className="tabs"
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
                                    Other Skills
                                </span>
                            ),
                            key: 3,
                                children: <ul>
                                    <li>Music Production</li>
                                    <li>Guitar, Bass, Drums, Whistling</li>
                                    <li></li>
                                    <li></li>
                                    
                                </ul>
},
                            
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