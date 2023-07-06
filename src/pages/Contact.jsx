import React, { useState, useEffect } from 'react';
import MyTextInput from '../components/MyTextInput';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { Formik, Form} from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
function Contact() {
  const [isSubmit, setSubmit] = useState(null)
  const initialValues = {
    name: '',
    email: '',
    message: ''
}
const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, 'must be 50 characters or less').required('can\'t be empty'),
  email: Yup.string().email('invalid email address').max(50, 'must be 50 characters or less').required('can\'t be empty'),
  message: Yup.string().required('leave me a message'),
})
const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
      await emailjs.send("service_gnq0dfe","template_ywstwdw", values, "KwhXN4E5f56d-O0lV" )
          .then((result) => {
              setSubmit('ok')
              console.log(result.text);
              resetForm()
          }, (error) => {
              setSubmit('error')
              console.log(error.text);
          });
      setSubmitting(false)
  } catch (e) {
      console.log(e)
  }
}
useEffect(() => {
  const isSubmitResult = setTimeout(() => setSubmit(null), 3000)
  return () => {
      clearTimeout(isSubmitResult)
  }
}, [isSubmit])
  return (
    <div className='contact'>
        <hr />
        <div className="upper">
            <h1>Get in Touch</h1>
            <div className="text">
                <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. But I’m also happy to hear about other opportunities that don’t fit that description. If you have an offer, request or a question, do feel free to check out my online profiles below and get in touch using the form below.</p>
                <div className="socials">
                <a href='https://github.com/tundexijim' target="_blank" rel="noreferrer"><AiFillGithub size={25}/></a>
                <a href='https://www.linkedin.com/in/ijimakinde-tunde-41095179' target="_blank" rel="noreferrer"><AiFillLinkedin size={25}/></a>
                 <a href='https://twitter.com/tundeph' target="_blank" rel="noreferrer"><BsTwitter size={25}/></a>
                 </div>
            </div>
        </div>
        <hr />
        <div className="below">
            <h1>Contact Me</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form id="contact-form">
            {isSubmit === 'ok' && <div data-submission-success>
                        <p><span>✔
                        </span>Your Form Has Been Successfully Submitted!</p>
                    </div>}
                    {isSubmit && isSubmit === 'error' && <div data-submission-error>
                        <p><span>❌
                        </span>An error occurred! Please try again.</p>
                    </div>}
            <MyTextInput
            label="Name"
            id="name"
            name="name"
            type="text"
          />

          <MyTextInput
            label="Email"
            id="email"
            name="email"
            type="email"
          />
           <MyTextInput
            label="Message"
            id="message"
            name="message"
            type="text"
            as="textarea"
          />
            <button type="submit" >SEND MESSAGE</button>
             </Form>
             </Formik>
        </div>
    </div>
  )
}

export default Contact