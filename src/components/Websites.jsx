import VideoPlayer from "./VideoPlayer"

const projects = [
    {
        name: "GuessDaMate",
        link: "https://www.loom.com/embed/f6f3ce52544f457da8ba9673a6336c6f?sid=231f2dcd-1663-4260-93b8-bf2df82c4b98",
        description: "",
        tech: ""
    },
    {
        name: "",
        link: "",
        description: "",
        tech: ""
    },
    {
        name: "",
        link: "",
        description: "",
        tech: ""
    },
]

const Websites = ()=> {

    return (
        <>
        {
            projects.map((project, index)=>{
                return(
                    <VideoPlayer name={project.name} link={project.link} key={index}/>
                )
            })
        }
        </>
    )
}
export default Websites