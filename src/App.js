import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Accordion, { useAccordionContext } from 'react-spring-accordion'
export default function App() {
  const { openedItems } = useAccordionContext()
  const [open, setOpen] = React.useState(openedItems)
  return (
    <div className='overall'>
      <Accordion.Wrapper onChange={openedItems => setOpen(openedItems)}>
        <Accordion.Item defaultOpen={true}>
          <Accordion.Heading className={`title ${open ? '' : 'noOpen'}`}>About Me</Accordion.Heading>
          <Accordion.Child className='content'><About /></Accordion.Child>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Heading className={`title ${open ? '' : 'noOpen'}`}>Skills</Accordion.Heading>
          <Accordion.Child className='content oslo'><Skills /></Accordion.Child>
        </Accordion.Item>

        <Accordion.Item>
          <Accordion.Heading className={`title ${open ? '' : 'noOpen'}`}>Projects</Accordion.Heading>
          <Accordion.Child className='content tajikistan'><Projects /></Accordion.Child>
        </Accordion.Item>
        <Accordion.Item>

          <Accordion.Heading className={`title ${open ? '' : 'noOpen'}`}>Contact</Accordion.Heading>
          <Accordion.Child className='content croatia'><Contact /></Accordion.Child>
        </Accordion.Item>
      </Accordion.Wrapper>
    </div>
  )
}

