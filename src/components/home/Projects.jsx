import React from 'react'
import Project from './projects/Project'
import ProjectData from './projects/ProjectData'


const Projects = () => {

  return (
    <section>
        <div className='text-center title-wrapper'>
           <h1 className='section-title'>Some Projects</h1>
        </div>
        <div className='section-project'>

            {
                    ProjectData.map( (project) => (
                        <Project key={project.id} data={project}/>  
                    ) )
            }
        </div>
    </section>
  )
}
    
export default Projects