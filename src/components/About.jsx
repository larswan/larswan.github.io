import { ToolFilled, DribbbleOutlined, LinkedinFilled, GithubFilled, MailFilled, CodeFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Collapse } from 'antd';


const About = () => {
    const onChange = (key) => {
        setTimeout(
            ()=>handleScrollToBottom(), 190
        )
    };
    const handleScrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    };

    return (
        <div className="pageContainer">
            <div className="about">
                
                <img className="aboutProfPic" src="https://github.com/larswan/larswan.github.io/blob/main/public/siteImages/headshot.jpg?raw=true"/>
                <h3>Larson Collier</h3>
                {/* <h2>Brooklyn, NY</h2> */}
                <div className="contactIcons">
                    <a href="https://www.linkedin.com/in/larson-collier/" style={{color: 'inherit' }}>
                        <LinkedinFilled />
                    </a>
                    <a href="https://github.com/larswan" style={{ color: 'inherit' }}>
                        <GithubFilled/>
                    </a>
                    <a href="mailto:collierlarson@gmail.com" style={{ color: 'inherit' }}>
                        <MailFilled />
                    </a>
                </div>
                <hr></hr>
                <p>
                    Hi, I'm a software developer born and raised in Atlanta, GA, now living in New York City. Throughout my life I’ve enjoyed drawing, playing music, and inventing little things.
                    <br></br><br></br>
                    In my time at the University of Georgia in Athens I played in a variety of bands, writing and recording music and releasing it under the banner of <a href="https://open.spotify.com/artist/087EadRmsB55nFpxzgHljT?si=bl9vKIhtS8GRWRu4imx37g" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>Goe Bidem Records</b></a>. I began creating cartoons, animations, and music under the pseudonym <a href="https://open.spotify.com/artist/087EadRmsB55nFpxzgHljT?si=bl9vKIhtS8GRWRu4imx37g" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>Blanko</b></a> and my music video "<a href="https://www.youtube.com/watch?v=ktLZu3rV88I" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}><b>Hallelujah</b></a>" was selected for the Indie Grits Film Festival. During this time I also designed and prototyped an accessory for guitar players called Pickit that won the 2016 UGA Idea Accelerator Program. 
                    <br></br><br></br>
                    Following college I worked a variety of positions in the film and music industries from snake wrangler to audio engineer and art director, as well as doing freelance video-editing and design work.<br></br><br></br>
                    After moving to New York I decided to make a career change. My goal was to find a path that involved creativity and complex problem solving; so when a friend told me about his work as a software engineer I recognized it as a career where I could leverage the skills in ideation and collaboration that I'd developed.
                    <br></br><br></br>
                    Problem solving gives me loads of energy, as does creative collaboration, and software engineering provides the perfect combination of these elements of work. I’m excited to be part of a constantly evolving discipline that provides so many opportunities to build and innovate. 
                </p>
                <Collapse 
                className="aboutCollapse"
                defaultActiveKey={[]} 
                onChange={onChange} 
                items={
                    [
                        {
                            label: (
                                <span>
                                    <CodeFilled />
                                     <>   </>Technologies
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
                                    <>  </>Programs
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
                                    <DribbbleOutlined />
                                    <>  </>Skills & Hobbies
                                </span>
                            ),
                            key: 3,
                            children: <ul>
                                <li>Guitar</li>
                                <li>Drums</li>
                                <li>Whistling</li>
                                <li>Doing bits</li>
                                <li></li>
                            </ul>,
                        },

                    ]
                } />
            </div>
        </div>
    )
}

export default About