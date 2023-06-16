import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderSubBox from './HeaderSubBox';

const Dropdown = ({ name, dropdownItems }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [show, setShow] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
        setShow(true)
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setShow(true)
        console.log(show)
    }


    return (
        <div
            className={`headerSubBox ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <h3 >{name}</h3>
            {
                show ?
                    <div className="dropdownContainer">
                        {dropdownItems.map((item)=>{
                            <HeaderSubBox name={item.name} link={item.link}/>
                        })}
                    </div>
                : null
            }
        </div>

    )
}

export default Dropdown