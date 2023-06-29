import { Button } from 'antd';
import { useEffect } from 'react';

function Home() {

    return (
        <div className="homePage">
            <div className="homeHero">
                IM A SOFTWARE ENGINEER
            </div>
            <div className="homeProjectContainer">
                Project
            </div>
            <div className="homeArtContainer">
                See animations
                <Button type="primary">Animations</Button>
            </div>
        </div>
    );
}

export default Home;