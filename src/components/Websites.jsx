import ProjectCard from './ProjectCard'


const projects = [
    {
        name: "GuessDaMate",
        link: "https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98",
        description: "Online version of the classic game Guess Who? allowing users to play with their friends using different sets of cards.",
        tech: "React, Rails, GAPI, PostgreSQL"
    },
    {
        name: "DriveTunes",
        link: "https://www.loom.com/embed/218323e656be417195be4648a21746f1?sid=4ee451ba-bf52-49e7-968e-e0fc101682fd",
        description: "Browser based library for listening to music files stored on personal Google Drive accounts in a more traditional music library format.",
        tech: "React, Rails, GAPI"
    },
    {
        name: "Classpass Clone",
        link: "https://www.loom.com/embed/7343196950cc4503bfcce165dcc88e66?sid=92733bcc-5aa9-421d-8cba-5739aefee203",
        description: "Clone of the workout service Classpass created as an excercise in web layout and CSS using minimal pre-built components. ",
        tech: "React, Tailwind, CSS, Google OAuth"
    },
]

 
const Websites = ()=> {

    return (
        <div className="projectsContainer">
        {
            projects.map((project, index)=>{
                return(
                    <ProjectCard name={project.name} link={project.link} description={project.description} tech={project.tech}  key={index}/>
                )
            })
        }
        </div>
    )
}
export default Websites