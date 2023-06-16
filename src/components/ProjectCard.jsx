import LoomPlayer from "./LoomPlayer"

const ProjectCard = ({link, name, description, techs}) => {

    return(
        <div>
            <LoomPlayer name={name} link={link}/>
        </div>
    )
}

export default ProjectCard