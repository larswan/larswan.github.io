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
        setShow(false)
    };

    const handleClick = () => {
        setShow(true)
    }

    return (
        <div>
            <div
                className={`headerSubBox ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <h3>{name}</h3>
            </div>
                {
                    show &&
                    <div onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                        className="dropdownContainer">
                            {dropdownItems.map((item, i)=>{
                                return (<HeaderSubBox name={item.name} link={item.link} key={i} />)
                            })}
                        </div>
                }
        </div>
)
}

export default Dropdown