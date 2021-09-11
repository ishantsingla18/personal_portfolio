import './About.scss'

function About() {
    return (
        <div className="about" id="about">
            <h1 className="bg">&lt;/&gt;</h1>
            <div className="container">
                <div className="left">
                    <img src="images/20200120_031151.jpg" alt=""/>
                </div>
                <div className="right">
                    <div className="content">
                    <h1>ABOUT <span>ME</span></h1>
                        <p className="about_me">I am a Front-End Web Developer and also a designer. I am skilled in using designing
                        softwares like Adobe Photoshop, Adobe Illustrator and Adobe XD, and in the field of
                        development I know HTML, CSS, JavaScript, and React JS. Currently, I am learning Node JS and Express JS. I am
                        pursuing B.tech in Computer Science Engineering at University of Petroleum and Energy
                        Studies, Dehradun. My goal is to become a full stack web developer who can build as
                        well as design websites.</p>
                        <p className="skills">skills -</p>
                        <span className="skill">C++</span>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">React.js</span>
                        <span className="skill">UI/UX</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About
