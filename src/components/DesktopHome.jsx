import { useRef, useEffect, useState } from 'react';
import { Link, Element } from 'react-scroll';

const DesktopHome = () => {
    const firstComponentRef = useRef(null);
    const secondComponentRef = useRef(null);
    const thirdComponentRef = useRef(null);

    let lastScrollPosition = 0

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        const firstComponentOffset = firstComponentRef.current.offsetTop;
        const secondComponentOffset = secondComponentRef.current.offsetTop;
        const thirdComponentOffset = thirdComponentRef.current.offsetTop;

        // Determine the scroll direction (up or down)
        const scrollDirection = scrollPosition > lastScrollPosition ? 'down' : 'up';
        lastScrollPosition = scrollPosition;

        if (scrollDirection === 'down') {
            if (scrollPosition >= firstComponentOffset && scrollPosition < secondComponentOffset) {
                // If the user is scrolling down and the first component is in view, scroll to the second component
                window.scrollTo({
                    top: secondComponentOffset,
                    behavior: 'instant',
                });
            } else if (scrollPosition >= secondComponentOffset && scrollPosition < thirdComponentOffset) {
                // If the user is scrolling down and the second component is in view, scroll to the third component
                window.scrollTo({
                    top: thirdComponentOffset,
                    behavior: 'instant',
                });
            }
        } else if (scrollDirection === 'up') {
            if (scrollPosition >= thirdComponentOffset && scrollPosition < secondComponentOffset) {
                // If the user is scrolling up and the third component is in view, scroll to the second component
                window.scrollTo({
                    top: secondComponentOffset,
                    behavior: 'instant',
                });
            } else if (scrollPosition >= secondComponentOffset && scrollPosition < firstComponentOffset) {
                // If the user is scrolling up and the second component is in view, scroll to the first component
                window.scrollTo({
                    top: firstComponentOffset,
                    behavior: 'instant',
                });
            }
        }
        console.log(scrollPosition)
        // setLastScrollPosition(window.scrollY)
    };

    // Attach the scroll event listener to the window
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div ref={firstComponentRef} style={{ height: '100vh', backgroundColor: 'red' }}>
                1
            </div>

            <div ref={secondComponentRef} style={{ height: '100vh', backgroundColor: 'blue' }}>
                2
            </div>

            <div ref={thirdComponentRef} style={{ height: '100vh', backgroundColor: 'green' }}>
                3
            </div>
        </div>
    );
};

export default DesktopHome;
