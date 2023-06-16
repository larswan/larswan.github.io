const VideoPlayer = ({link, name}) => {
    return (
        <div className="loomContainer">
            <iframe 
            title={name}
            src={link} 
            frameBorder="0" 
            webkitallowfullscreen="true" mozallowfullscreen="true"
            allowFullScreen={false}
            className="loomVideo">
            </iframe>
        </div>
    );
};

export default VideoPlayer