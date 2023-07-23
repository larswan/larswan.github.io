const YouTubeVideo = ({name, link}) => {

    return(
        <iframe 
        alt={name} 
        className="youTubeVideo" 
        src={link} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    )
}
export default YouTubeVideo
