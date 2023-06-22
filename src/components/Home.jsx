import { Button } from 'antd';
import { useEffect } from 'react';
import { readdir } from 'fs/promises';

function Home() {
    useEffect(() => {
        const getFilesFromFolder = async () => {
            try {
                const folderPath = 'public/cartoons'; // Replace with your folder path
                const files = await readdir(folderPath);
                console.log(files); // Array of file names
            } catch (error) {
                console.error('Error reading folder:', error);
            }
        };

        getFilesFromFolder();
    }, []);

    return (
        <div>
            <Button type="primary">Hello Ant Design</Button>
            {/* Render your component */}
        </div>
    );
}

export default Home;