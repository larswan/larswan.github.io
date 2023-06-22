import LoomPlayer from "./LoomPlayer"
import { Card, Space } from 'antd';


const ProjectCard = ({link, name, description, techs}) => {

    return(
        <div>
            <Space direction="vertical" size={16}>
                <Card
                    title={name}
                    extra={<a href={link}>Demo</a>}
                    style={{
                        width: 300,
                    }}
                >
                    <LoomPlayer name={name} link={link}/>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>

        </div>
    )
}

export default ProjectCard