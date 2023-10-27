import "./index.scss"
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faHtml5, faJsSquare, faNodeJs, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
    const [letterClass,setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t', ' ', 'm', 'e']}
                        idx={15} />
                </h1>
                <p>A driven and skilled professional with a fervor for web and software development,
                    as well as data analysis. My goal is to secure a role in a reputable IT
                    company that allows me to work with state-of-the-art technologies while
                    participating in diverse and challenging projects.
                </p>
                <p>I exude confidence in my abilities,
                    tackling every challenge with a poised determination
                    that drives me to excel in every endeavor</p>
                <p>If I need to define myself in one sentence that would be a tech enthusiast
                and problem-solver, driven by the thrill of innovation and the pursuit</p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#61DBFB'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithub} color='#333'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color='#DD0031'/>
                    </div>
                </div>
            </div>
        </div>
            <Loader type="pacman" active={true}/>
</>


    )

}

export default About