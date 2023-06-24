import YouTubeVideo from "./YouTubeVideo"

const youTubeMap = [
    {
        name: "Obligatory Text",
        link: "https://www.youtube.com/embed/R7Z9eUg_M-Q"
    },
    {
        name: "Hallulujah Video",
        link: "https://www.youtube.com/embed/ktLZu3rV88I"
    },
    // {
    //     name: "",
    //     link: ""
    // },
]

const Animations = () => {

    return (
        <div className="projectsContainer">

            {youTubeMap.map(video=>{
                return(
                    <YouTubeVideo name={video.name} link={video.link} />
                )
            })}
            {/* <iframe alt="Obligatory Text Video" className="youTubeVideo" src="https://www.youtube.com/embed/R7Z9eUg_M-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe alt="Hallulujah Video" className="youTubeVideo" src="https://www.youtube.com/embed/ktLZu3rV88I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    )
}
export default Animations