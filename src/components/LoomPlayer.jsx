const LoomPlayer = ({link, name}) => {
    const fixedLink = link + "?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
    return (
        <div className="loomContainer">
            <iframe 
            title={name}
            src={fixedLink} 
            // src={link}
            frameBorder="0" 
            webkitallowfullscreen="true" mozallowfullscreen="true"
            allowFullScreen={true}
            className="loomVideo">
            </iframe>
        </div>
    );
};

export default LoomPlayer
