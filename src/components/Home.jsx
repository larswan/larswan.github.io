import { Button } from 'antd';
import { useEffect } from 'react';

function Home() {

    return (
        <div className="homePage">
            <div className="homeHero">
                MAIN
            </div>
            <div className="inlineHomePage">
                <div className="homeProjectContainer">
                    Project
                </div>
                <div className="homeArtContainer">
                    See art
                    {/* <Button type="primary">Animations</Button> */}
                </div>
            </div>
        </div>
    );
}

export default Home;