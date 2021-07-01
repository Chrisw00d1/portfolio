import battleships1 from '../images/battleships1.png'
import battleships2 from '../images/battleships2.png'
import battleships3 from '../images/battleships3.png'
import superhero1 from '../images/superhero1.png'
import superhero2 from '../images/superhero2.png'
import superhero3 from '../images/superhero3.png'
import r8mypl81 from '../images/r8mypl81.png'
import r8mypl82 from '../images/r8mypl82.png'
import r8mypl83 from '../images/r8mypl83.png'
import noteitdown1 from '../images/noteitdown1.png'
import noteitdown2 from '../images/noteitdown2.png'
import noteitdown3 from '../images/noteitdown3.png'

const projectData = [
  {
    projectId: 1,
    projectName: 'Battleships',
    images: [battleships1, battleships2, battleships3],
    skills: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-git-plain', 'devicon-github-original'],
    links: ['https://github.com/Chrisw00d1/battleships', 'https://chrisw00d1.github.io/battleships/'],
    description: 'My take on the board game Battleships. You battle against the computer to see who can sink their oppenents ships first! This was created using HTML, CSS and JavaScript.\nTime-frame: 1 week'

  },
  {
    projectId: 2,
    projectName: 'Superhero TopTrumps',
    images: [superhero1, superhero2, superhero3],
    skills: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-react-original', 'devicon-sass-original', 'devicon-git-plain', 'devicon-github-original'],
    links: ['https://github.com/Chrisw00d1/Project-2', 'https://superherocards.netlify.app/'],
    description: 'A chance to see all your favourite superheros on cards and then being able to use them to play against each other in our version of top trumps. We used React to create the site and an API to get the data.\nTime-frame: 48 hours'

  },
  {

    projectId: 3,
    projectName: 'R8 my Pl8 M8',
    images: [r8mypl81, r8mypl82, r8mypl83],
    skills: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-react-original', 'devicon-nodejs-plain', 'devicon-mongodb-plain', 'devicon-express-original', 'devicon-sass-original', 'devicon-bulma-plain', 'devicon-git-plain', 'devicon-github-original', 'devicon-heroku-original'],
    links: ['https://github.com/Chrisw00d1/project-3-client', 'https://r8-my-pl8.netlify.app/'],
    description: 'We created a place for you to share your best plates with your mates for them to rate and comment on. On top of this you can see how many plates you can catch before dropping one. The front end was created with React and the back end was set up with express and mongodb.\nTime-frame: 1 week'

  },
  {

    projectId: 4,
    projectName: 'note-it-down',
    images: [noteitdown1, noteitdown2, noteitdown3],
    skills: ['devicon-html5-plain', 'devicon-css3-plain', 'devicon-javascript-plain', 'devicon-react-original', 'devicon-python-plain', 'devicon-django-plain', 'devicon-postgresql-plain', 'devicon-sass-original', 'devicon-git-plain', 'devicon-github-original', 'devicon-heroku-original', 'devicon-trello-plain'],
    links: ['https://github.com/Chrisw00d1/project-4-client', 'https://note-it-down-net.netlify.app/'],
    description: 'A chance for you to note down that tune in your head and share it with others. We used React and Tone.js for the front end and python with django for the back end.\nTime-frame: 1 week'

  }
]

export default projectData