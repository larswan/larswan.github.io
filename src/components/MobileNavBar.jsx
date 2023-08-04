// https://ant.design/components/menu#components-menu-demo-horizontal
import { HomeFilled,  } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const items = [
    {
        key: '',
        icon: <HomeFilled style={{marginLeft: "7px"}} />,
        style: {marginRight: "auto"
        , color: "black"
    }
    },
    {
        label: 'Coding Projects',
        key: 'projects',
    },
    {
        label: 'Art',
        key: 'art',
        children: [
            {
                type: 'group',
                // label: 'Item 1',
                children: [
                    {
                        label: "Animations",
                        key: "animations"
                    },
                    {
                        label: "Cartoons",
                        key: "cartoons"
                    },
                    {
                        label: "Sketches",
                        key: "sketches"
                    },
                    {
                        label: "Design",
                        key: "design"
                    }
                ],
            }
        ],
    },
    {
        label: 'About',
        key: 'about',
    },
];
const MobileNavBar = () => {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [current, setCurrent] = useState(getCurrentPath);

    function getCurrentPath() {
        const currentUrl = window.location.href.split('/')
        const path = currentUrl[currentUrl.length - 1]        
        return path
    }

    const onClick = (e) => {
        navigate(e.key)
        setCurrent(e.key);
    };

    return <Menu style={{ minWidth: 0, display: "flex", justifyContent: " flex-start", background: "auto" }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MobileNavBar;