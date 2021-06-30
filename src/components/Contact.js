export default function Contact() {
  return (
    <div className='contact'>
      <div className='contactLinks'>
        <a href='https://github.com/Chrisw00d1/' target='_blank' rel='noreferrer'>Github</a>
        <a href='https://www.linkedin.com/in/christopher-w-802b391ba/' target='_blank' rel='noreferrer'>LinkedIn</a>
        <p>Email</p>
      </div>
      <div className='contactForm'>
        <form name='contact' method='post' action='/contact'>
          <input type="hidden" name="form-name" value="contact" />
          <input type='text' name='name' placeholder='Name...' />
          <input type='text' name='email' placeholder='Email...' />
          <textarea name='message' placeholder='message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}