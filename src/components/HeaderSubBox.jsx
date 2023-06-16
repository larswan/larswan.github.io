import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderSubBox = ({name, dropdownItems}) => {
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
        >
            <h3 onClick={() => navigate("/websites")}>{name}</h3>
        </div>

    )
}

export default HeaderSubBox