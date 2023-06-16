import { useNavigate } from 'react-router-dom';
import HeaderSubBox from './HeaderSubBox';
import Dropdown from './Dropdown';

const NavBar = () => {
    const navigate= useNavigate()
    
    return (
        <div className="navBar">
            <h3 onClick={()=>navigate("/")} className="siteTitle">SWAN THE GOOSE</h3>
            {/* <HeaderSubBox className="siteTitle" name="SWAN THE GOOSE" link="" /> */}
            <div className="rightNav">
                <HeaderSubBox name="Websites" link="websites" />
                <Dropdown name="Art" dropdownItems={[
                    {name: "Animations",
                    link: "animations"
                },
                    {name: "Drawing",
                        link: "drawings"
                },
                    {name: "Graphics",
                    link: "graphics"
                },
                //     {title: "Animations",
                //     link: "animation"
                // },
                    , "drawings", "graphics", "music"]}/>
                <HeaderSubBox name="Swanify" link="swantogoose"/>
                <HeaderSubBox name="About" link="about"  />
            </div>
        </div>
    )
}

export default NavBar