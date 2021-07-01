import React from 'react'
import ProjectCard from './ProjectCard'
import projectData from './data/ProjectData'

export default function Projects() {
  const [count, setCount] = React.useState(0)
  const [width, setWidth] = React.useState(window.innerWidth)
  const projectsArray = projectData
  let projectsToRender
  if (window.innerWidth < 1000) {
    projectsToRender = [projectsArray[Math.abs(count % projectsArray.length)]]
  } else {
    projectsToRender = [projectsArray[Math.abs(count % projectsArray.length)], projectsArray[Math.abs((count + 1) % projectsArray.length)]]
  }
  window.addEventListener('resize', () => setWidth(window.innerWidth))

  React.useEffect(() => {

  }, [width])

  const handleIncrease = () => {
    if (width < 1000) setCount(count + 1)
    else setCount(count + 2)
  }
  const handleDecrease = () => {
    if (width < 1000) setCount(count - 1)
    else setCount(count - 2)
  }
  return (
    <div className='projects'>
      <button onClick={handleDecrease}><i className="fas fa-5x fa-angle-left"></i></button>
      {projectsToRender.map(project => {
        return (
          <ProjectCard key={project.projectId} project={project}/>
        )
      })}
      <button onClick={handleIncrease}><i className="fas fa-5x fa-angle-right"></i></button>
    </div>
  )
}


// * Maybe use Something below to help with rendering when the screen size is to small
// https://www.youtube.com/watch?v=OHvJqOjToes
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs