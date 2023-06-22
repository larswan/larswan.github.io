import LoomPlayer from "./LoomPlayer"
import { Card, Space } from 'antd';
// https://ant.design/components/card


const ProjectCard = ({link, name, description, tech}) => {

    return(
            // <Space direction="vertical" size={16}>
                <Card
                    cover={
                        
                        <LoomPlayer name={name} link={link}/>
                    }
                    title={name}
                    extra={<a href={link}>Demo</a>}
                    style={{
                        width: 450,
                    }}
                    key={name}
                >
                    <p>{description}</p>
                    <p><b>{tech}</b></p>
                </Card>
            // </Space>
    )
}

export default ProjectCard

