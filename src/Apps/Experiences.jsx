import '../css/App.css'
import '../css/Projects.css'
import { Project } from './Projects.jsx'

export function Experiences() {
    return (
        <>
            <div className="projectBox">


                <h1 className="project-section-title">Experiences</h1>
                <div className="projects">

                    <Project title="Research Assistant" year="July 2024-Present" d1="Used Milvus Vector Database to perform similarity searches on over 2000 lines of data" d2="Used scikit-learn library to process chars into vectors" d3="Created documentation for using Milvus and common issues" link="https://github.com/cavalier08/Milvus-Documentation" tools="PyMilvus | Scikit-learn | Docker | Milvus Vector Database" />

                    <Project
                        title="CxC Hackathon Coordinator"
                        year="December 2024-Present"

                    />
                </div>
            </div>


        </>
    )
}