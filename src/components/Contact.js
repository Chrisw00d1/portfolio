export default function Contact() {
  return (
    <div className='contact'>
      <div className='contactLinks'>
        <a href='https://github.com/Chrisw00d1/' target='_blank' rel='noreferrer'><i className="devicon-github-original"></i> <small>github.com/Chrisw00d1/</small></a>
        <a href='https://www.linkedin.com/in/chrisw00d1/' target='_blank' rel='noreferrer'><i className="devicon-linkedin-plain"></i> <small>linkedin.com/in/chrisw00d1/</small></a>
        <a href="mailto:chriswood998@outlook.com"><i className="fas fa-envelope"></i> <small>chriswood998@outlook.com</small></a>
      </div>
      <div className='contactForm'>
        <form name='contact' method='post' action='/contact'>
          <input type="hidden" name="form-name" value="contact" />
          <input type='text' name='name' placeholder='Name...' />
          <input type='text' name='email' placeholder='Email...' />
          <textarea name='message' placeholder='Message...' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}