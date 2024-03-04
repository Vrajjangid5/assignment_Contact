import React, { useState,useEffect } from 'react';
import './style.css'



function ContactForm() {

    useEffect(() => {
        const scriptURL =
          'https://script.google.com/macros/s/AKfycbx0OvQLpNNB4eB7ZYyOyuVW6oadmE7qDeKFMgun3X5Pk5TkVZ2GBW3TM81yUsZgpXNJ/exec';
        const form = document.forms['submit-to-google-sheet'];
    
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then((response) => console.log('Success!', response))
            .catch((error) => console.error('Error!', error.message));
        });
      }, []);



  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [mobile,setMobile]=useState('');
  const [email,setEmail]=useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleMobile=(event)=>{
    setMobile(event.target.value);
  };
  const handleEmail=(event)=>{
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle form submission
    console.log('Submitted:', { username, message ,mobile});
    // Reset the form fields after submission
    setUsername('');
    setMessage('');
    setMobile('');
    setEmail('');
  };

// 'https://script.google.com/macros/s/AKfycbx0OvQLpNNB4eB7ZYyOyuVW6oadmE7qDeKFMgun3X5Pk5TkVZ2GBW3TM81yUsZgpXNJ/exec'
 

  return (
    <form onSubmit={handleSubmit} className="cont" name='submit-to-google-sheet'>
        <h1 className='textt'>Lets Connect</h1>
      <input
        type="text"
        autoComplete="off"
        name="Username"
        className="input vraj"
        required
        placeholder="Full Name"
        value={username}
        onChange={handleUsernameChange}
      />
      <input type="email" required id="email"  className='input' value={email} name="Email" placeholder='email' onChange={handleEmail}></input>
      <input
        type="number"
        autoComplete="off"
        name="Mobile"
        required
        className="input"
        placeholder="Mobile"
        value={mobile}
        onChange={handleMobile}
      />
      <textarea
        id="w3review"
        name="Message"
        required
        rows="4"
        cols="50"
        className="textarea"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      ></textarea>

      <button type="submit" className="button">
        Send Message
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="icon"
          style={{ marginLeft: '4px' }}
        >
          <path
            clipRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  );
}

export default ContactForm;
