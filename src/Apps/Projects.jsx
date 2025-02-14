import '../css/App.css'
import '../css/Projects.css'

export function Projects() {
    return (
        <>
            <div className="projectBox">
                <h1 className="project-section-title">Projects</h1>
                <div className="projects">

                    <Project title="InQuizitive AI" src="" d1="Designed front-end using HTML and CSS" d2="Used GeminiAI API to generate test questions" d3="Collaborated with two other peers to create project" link="https://cavalier08.github.io/InQuizitive-AI/" tools="HTML | CSS | JavaScript | Gemini AI" />

                    <Project title="ClearQuest" src="" d1="" d2="" d3="" link="https://cavalier08.github.io/ClearQuest/" tools="HTML | CSS | JavaScript" />

                    <Project title="EcoSim" src="" d1="" d2="" d3="" link="https://cavalier08.github.io/EcoSim/" tools="HTML | CSS | JavaScript" />

                    <Project title="Maze Game" d1="Created an algorithm that can navigate recursively through a maze using DFS" d2="Generated front end using Java GUI" d3="Found the shortest path in a maze while maximizing the number of points collected" link="" tools="Java | Java GUI" />
                </div>
            </div>
        </>
    );

}

export function Project({ title, year, img_src, link, tools, d1, d2, d3 }) {
    return (
        <>
            <div className="project-box">
                <div className="project-title">
                    <h3 className="project-title">
                        {title}
                    </h3>
                    <p>{year}</p>

                </div>

                <img class="project-pic" src={img_src} />

                <ul class="list">
                    <li class="list">
                        {d1}

                    </li>
                    <li class="list">{d2}</li>
                    <li class="list"> {d3}</li>
                </ul>
                <a className="project-link" target="_black" href={link}>Github</a>
                <p className="tools">{tools}</p>
            </div>

        </>
    );
}
