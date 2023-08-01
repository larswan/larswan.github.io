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
            title={<b>{name}</b>}
            extra={<a href={link} style={{ backgroundColor: '#1677ff', color: 'white', padding: '5px 10px', borderRadius: '10px' }}>
                <b>Demo</b>
            </a>}
            style={{
                width: isMobile ? 350 : 800
            }}
            key={name}
        >
            <p>{description}</p>
            <p><b>{tech}</b></p>
        </Card>
    );
};

export default ProjectCard;
