import "./index.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import { Link } from "react-router-dom";

const Contact = () => {
    const [letterClass,setLetterClass] = useState('text-animate')
    const [isSent, setIsSent] = useState(false);
    const refForm = useRef()
    const serviceId = process.env.REACT_APP_SMTP_SERVICE_ID
    const templateId = process.env.REACT_APP_SMTP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_SMTP_PUBLIC_KEY

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            serviceId,
            templateId,
            refForm.current,
            publicKey)
            .then(
                () => {
                    setIsSent(true);
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    alert('Failed to send the message: ' + error.text)
                }
            )
    }

    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            letterClass={letterClass}
                            idx={15} />
                    </h1>
                    <p>
                        Am Ready to connect and explore exciting opportunities,
                        Let's collaborate on your next project.
                        Reach out to me, and let's create some digital magic together!
                    </p>
                    <div className='contact-form'>
                        {isSent ? (
                            <div>
                                <p>Thank you for your message! I will get back to you shortly.</p>
                                <Link to="/" className="flat-button">GO TO HOMEPAGE</Link>
                            </div>
                        ) : (
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required={true}/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='E-mail' required={true}/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required={true}/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required={true}></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>
                        )}
                    </div>
                </div>

            </div>
            <Loader type="pacman" active={true}/>
        </>
    )


}

export default Contact