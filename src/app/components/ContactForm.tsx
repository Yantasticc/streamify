"use client"

import React from 'react'
import styles from '@/app/contact/contact.module.css'
import {useState} from "react";

const ContactForm = () => {

  const[user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
  })

  const [status, setStatus] = useState(null);

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({...prevUser, [name] : value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }

    }catch (e) {
        console.log(e)
    }

}

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <lable htmlFor="username">
          Enter your name:
          <input type='text' 
            name='username' 
            id='username' 
            placeholder='Enter your name'
            value={user.username}
            onChange={handleChange}
            autoComplete='off'
          />
        </lable>
      </div>

      <div className={styles.input_field}>
        <lable htmlFor="email">
          Enter your email:
          <input type='text' 
            name='email' 
            id='email' 
            placeholder='Enter your email'
            value={user.email}
            onChange={handleChange}
            autoComplete='off'
          />
        </lable>
      </div>

      <div className={styles.input_field}>
        <lable htmlFor="phone">
          Enter your phone:
          <input type='text' 
            name='phone' 
            id='phone' 
            placeholder='Enter your phone'
            value={user.phone}
            onChange={handleChange}
            autoComplete='off'
          />
        </lable>
      </div>

      <div className={styles.input_field}>
        <lable htmlFor="message">
          Enter your message:
          <textarea 
            name='message' 
            id='message' 
            rows={5}
            placeholder='Enter your message'
            value={user.message}
            onChange={handleChange}
            autoComplete='off'
          />
        </lable>
      </div>

      <div>
        {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
        <button type="submit">Send Message</button>
      </div>

    </form>
  )
}

export default ContactForm
