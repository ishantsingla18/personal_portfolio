import "./ProjectList.scss"

function ProjectList({id, title, active, setActive}) {
    const handleClick = () => {
        setActive(id);
    }

    return (
        <li className={active ? "list active" : "list"} onClick={handleClick}>
           {title} 
        </li>
    )
}

export default ProjectList
