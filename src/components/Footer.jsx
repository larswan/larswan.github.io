

const Footer = ({ showFooter }) => {

    return(
        <div className={showFooter ? 'footer fade-in' : 'footer'}>
            <p className="footerText">Copyright © All rights reserved.</p>
        </div>
    )
}
export default Footer