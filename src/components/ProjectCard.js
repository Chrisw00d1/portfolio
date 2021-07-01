import React from 'react'

export default function ProjectCard({ project }) {
const [index, setIndex] = React.useState(0)
React.useEffect(() => {
  const intervalId = setInterval(() => setIndex((index + 1) % project.images.length), 5000)
  return () => clearInterval(intervalId)
}, [index, project.images.length])
  return (
    <div className='card'>
      <div className='imageContainer'>
      {project.images.map((image,i) => {
        return (
          <>
          {index === i && <img key={image} src={image} alt={project.projectName} className='projectImage'/>}
          </>
        )
      })}
      </div>
      <div className='nameDiv'>
      <h3>{project.projectName}</h3>
      </div>
      <hr />
      <div className='projectSkills'>
        {project.skills.map(skill => {
          return <i className={skill}></i>
        })}
      </div>
      <p className='projectText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <div className='projectLinks'>
        <a href={project.links[0]} target='_blank' rel='noreferrer'> Github</a>
        <a href={project.links[1]} target='_blank' rel='noreferrer'>Website</a>
      </div>
    </div>
  )
}