import { useEffect, useState } from 'react';
import LoomPlayer from "./LoomPlayer"
import { Card, Space } from 'antd';

const ProjectCard = ({ link, loom, linkTitle, name, description, tech }) => {
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
            cover={<LoomPlayer name={name} link={loom} />}
            title={<b>{name}</b>}
            extra={<a href={link} style={{ backgroundColor: '#1677ff', color: 'white', padding: '5px 10px', borderRadius: '10px' }}>
                <b>{linkTitle}</b>
            </a>}
            style={{
                width: isMobile ? 350 : 800
            }}
            key={name}
        >
            <div style={{display: "flex", flexDirection: "column"}}>
                <p style={{margin: 0}}>{description}</p>
                <p style={{marginBottom: 0}}><b>Key Technologies: {tech}</b></p>
            </div>
        </Card>
    );
};

export default ProjectCard;
