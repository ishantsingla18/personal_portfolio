import './Home.scss';
import { init } from "ityped";
import { useEffect, useRef } from 'react';

function Home() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 60,
            backDelay: 1500,
            backSpeed: 40,
            strings: ["Front-End Web Developer", "UI/UX Designer", "Graphic Designer"]
        });
    }, [])

    return (
        <div className="home" id="home">
            <img src="images/clement-h-95YRwf6CNw8-unsplash.jpg" alt=""/>
            <div className="intro">
                <h1 className="greet">Hi, I'm Ishant Singla -</h1>
                <h1 className="skill"><span ref={textRef}></span></h1>
            </div>
        </div>
    )
}

export default Home
