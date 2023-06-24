// https://ant.design/components/menu#components-menu-demo-horizontal
import { HomeFilled,  } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const items = [
    {
        // label: 'Home',
        key: 'home',
        icon: <HomeFilled />,
    },
    {
        label: 'Projects',
        key: 'projects',
        // icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: 'Swanify',
        key: 'swantogoose',
        // icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: 'Art',
        key: 'art',
        // icon: <SettingOutlined />,
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
                        label: "Graphics",
                        key: "graphics"
                    }
                ],
            }
        ],
    },

    {
        label: 'About',
        key: 'about',
        // icon: <AppstoreOutlined />,
        // disabled: true,
    },
];
const MobileNavBar = () => {

    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key)
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default MobileNavBar;