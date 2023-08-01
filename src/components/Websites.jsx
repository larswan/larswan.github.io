import ProjectCard from './ProjectCard'


const projects = [
    {
        name: "GuessDaMate",
        linkTitle: "Watch Demo",
        loom: "https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98",
        link: "https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98",
        description: "GuessDaMate is my web-based take on the classic board game Guess Who? Users sign in and add friends using their Google accounts. They then select a set of famous people and take turns trying to guess the other player's card.\nThis project helped strengthen my skills in mobile-first design as well as handling game logic. One main challenge was designing the database with expansibility in mind.\nI chose PostgreSQL so that I could pass complex 'turn' objects with values for question, answer, turnNumber, flippedCards array, playerID, and other useful data. This structure allows for additional features such as 'turn history', or for the losing player to see at the end of the game which question made them falsely turn over the correct card.",
        tech: "React, Rails, GAPI, PostgreSQL"
    },
    {
        name: "DriveTunes",
        linkTitle: "Watch Demo",
        loom: "https://www.loom.com/embed/218323e656be417195be4648a21746f1?sid=4ee451ba-bf52-49e7-968e-e0fc101682fd",
        link: "https://www.loom.com/embed/218323e656be417195be4648a21746f1?sid=4ee451ba-bf52-49e7-968e-e0fc101682fd",
        description: "DriveTunes is a browser based music library for files stored on personal Google Drive accounts. The idea was based on a personal need, as I store and listen to my demos and other songs not on Spotify with Google Drive, which only displays as a file browser and does not store metadata such as song title, album, album art, artist, track number etc. I built the front-end while partner Vincent Le built the backend.\nUsers login with Google OAuth and authorize access to their files in their drive.When they click ‘Import Files’ DriveTunes scans for any music files that are not already in their library and allows users to select songs to add to their library.On the ‘Manage Files’ screen users can update metadata so that their songs are properly labeled and grouped.\nI enjoyed familiarizing myself with GAPI as well as synthesizing elements of iTunes, SoundCloud, Spotify, and Google UIs to design the interface.",
        tech: "React, Rails, GAPI"
    },
    {
        name: "Classpass Clone",
        loom: "https://www.loom.com/embed/7343196950cc4503bfcce165dcc88e66?sid=92733bcc-5aa9-421d-8cba-5739aefee203",
        link: "https://classpass.com/studios/yogasole-brooklyn-wsle",
        linkTitle: "View Reference",
        description: "In this project I built a front-end clone of the fitness service ClassPass using Tailwind CSS and minimal pre-built components. This was largely an exercise in reverse engineering CSS to practice meeting specific design requirements. Click 'View Reference' for comparison.",
        tech: "React, Tailwind, CSS, Google OAuth"
    },
]

 
const Websites = ()=> {

    return (
        <div className="projectsContainer">
            {projects.map((project, index) => {
                const descriptionWithLineBreaks = project.description.split('\n').map((part, idx) => (
                    <p key={idx}>{part}</p>
                ));

                return (
                    <ProjectCard
                        name={project.name}
                        loom={project.loom}
                        linkTitle={project.linkTitle}
                        link={project.link}
                        description={descriptionWithLineBreaks}
                        tech={project.tech}
                        key={index}
                    />
                );
            })}
        </div>
    )
}
export default Websites