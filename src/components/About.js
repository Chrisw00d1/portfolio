import React from 'react'
export default function About() {

  const [width, setWidth] = React.useState(window.innerWidth)
  window.addEventListener('resize', () => setWidth(window.innerWidth))

  React.useEffect(() => {

  }, [width])


  return (
    <div className='about'>
      <img src='https://res.cloudinary.com/dqdugu41a/image/upload/v1627390771/Portfolio/LinkedIn_Pic_auto_x2_nc14sf.jpg' alt='profile pic' />
      <div className='aboutText'>
        <div className='mainAboutText'>
          <h2>Chris Wood</h2>
          <p>I graduated in 2020 with BEng (Hons) first class degree of Mechanical Engineering from the University of Swansea.
            Throughout the course I was exposed to programming which ranged from analysing data to getting a robot arm to mimic my arm movement.
            The designing and building process in coding sparked the same interest with the design process I got from my engineering course. <br /><br />
            Once I finished University I decided to pursue this new interest I had in coding as I did not need to be in a dedicated workshop to be able to work on projects. I joined a remote software engineering immersive course with General Assembly which covers the fundamentals of Web Development with the aim of being able to apply the skills I learnt from the course into a Software Engineering role. <br />
          </p>
          {window.innerWidth < 806 &&
            <>
              <p>I am currently working on a project with a friend which involves connecting a raspberry pi to a website so that we will be able to control it from our phones. Outside of coding I like to go bouldering when I can with friends and traveling to different countries. The backgrounds are pictures I've taken from some places I've travelled to. <br /><br />
                I’ve also grown up playing the drums which led to me playing in a bunch of charity concerts at school and then to joining a band at uni. We published and released a song while a uni called honey gold which you can give a listen to below.</p>
              <iframe width="80%" height="160" src="https://www.youtube.com/embed/VznDBjhJPRc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>
          }
        </div>
        <div className='otherAboutText'>
          {window.innerWidth >= 806 &&
            <>
              <p>I am currently working on a project with a friend which involves connecting a raspberry pi to a website so that we will be able to control it from our phones. Outside of coding I like to go bouldering when I can with friends and traveling to different countries. The backgrounds are pictures I've taken from some places I've travelled to. <br /><br />
                I’ve also grown up playing the drums which led to me playing in a bunch of charity concerts at school and then to joining a band at uni. We published and released a song while a uni called honey gold which you can give a listen to below. </p>
              <iframe width="80%" height="160" src="https://www.youtube.com/embed/VznDBjhJPRc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </>}

        </div>
      </div>
    </div>
  )
}