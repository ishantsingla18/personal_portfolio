import './Projects.scss'
import ProjectList from '../ProjectList/ProjectList'
import { useState, useEffect } from 'react'
import { webApps, graphics, uiDesigns } from '../../data'

function Projects() {
    const [active, setActive] = useState("front-end");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "front-end",
            title: "Front-End Web Apps"
        },
        {
            id: "graphic-design",
            title: "Graphic Designs"
        },
        {
            id: "ui/ux",
            title: "UI/UX Designs"
        }
    ];

    useEffect(() => {
        switch(active) {
            case "front-end":
                setData(webApps);
                break;
            case "graphic-design":
                setData(graphics);
                break;
            case "ui/ux":
                setData(uiDesigns);
                break;
        }
    }, [active]);

    return (
        <div className="projects" id="projects">
            <h1 className="bg">&lt;/&gt;</h1>
            <div className="container_out">
            <h1>PROJECTS</h1>
            <ul>
                {list.map((item) => (
                    <ProjectList id={item.id} title={item.title} active={active === item.id} setActive={setActive} />
                ))}
            </ul>
            <div className="container">
                {console.log(data)}
                {data.map(i => (
                    <div className="item">
                        <img src={i.img} className={i.id} alt=""/>
                        <h3>{i.title}</h3>
                    </div>
                ))}
                
            </div>
            </div>
        </div>
    )
}

export default Projects
