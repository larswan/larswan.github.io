import { useEffect, useState } from 'react';
import LoomPlayer from "./LoomPlayer"
import { Card, Space } from 'antd';

const ProjectCard = ({ link, name, description, tech }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = width <= 768; // Define the breakpoint for mobile width

    return (
        <Card
            cover={<LoomPlayer name={name} link={link} />}
            title={name}
            extra={<a href={link}>Demo</a>}
            style={{
                width: isMobile ? 350 : 450, // Set the width to 300 for mobile devices, and 450 for others
            }}
            key={name}
        >
            <p>{description}</p>
            <p><b>{tech}</b></p>
        </Card>
    );
};

export default ProjectCard;
