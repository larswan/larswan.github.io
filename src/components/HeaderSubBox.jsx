import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderSubBox = ({name, link}) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };




    return(
        <div
            className={`headerSubBox ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/${link}`)}
        >
            <h3 >{name}</h3>
        </div>

    )
}

export default HeaderSubBox