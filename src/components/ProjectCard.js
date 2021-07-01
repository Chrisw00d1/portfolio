import React from 'react'

export default function ProjectCard({ project }) {
  const [index, setIndex] = React.useState(0)
  const description = project.description.split('\n')
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index + 1) % project.images.length), 5000)
    return () => clearInterval(intervalId)
  }, [index, project.images.length])

  return (
    <div className='card'>
      <div className='imageContainer'>
        {index === 0 && <img src={project.images[0]} alt={project.projectName} className='projectImage' />}
        {index === 1 && <img src={project.images[1]} alt={project.projectName} className='projectImage' />}
        {index === 2 && <img src={project.images[2]} alt={project.projectName} className='projectImage' />}
      </div>
      <div className='nameDiv'>
        <h3>{project.projectName}</h3>
      </div>
      <hr />
      <div className='projectSkills'>
        {project.skills.map(skill => {
          return <i key={skill} className={skill}></i>
        })}
      </div>
      <p className='projectText'>{description[0]}<br /><br />{description[1]}</p>
      <div className='projectLinks'>
        <a href={project.links[0]} target='_blank' rel='noreferrer'> Github</a>
        <a href={project.links[1]} target='_blank' rel='noreferrer'>Website</a>
      </div>
    </div>
  )
}