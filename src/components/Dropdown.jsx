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
        console.log(dropdownItems)
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        // setShow(false)
        console.log(show)
    };

    const handleClick = () => {
        setShow(true)
        console.log(show)
    }


    return (
        <div>

        <div
            className={`headerSubBox ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <h3 >{name}</h3>
        </div>
            {
                show &&
                    <div className="dropdownContainer">
                        {dropdownItems.map((item)=>{
                            console.log(item.name)
                            return (<HeaderSubBox name={item.name} link={item.link} />)
                        })}
                    </div>
            }
        </div>

)
}
// <HeaderSubBox name={item.name} link={item.link}/>

export default Dropdown