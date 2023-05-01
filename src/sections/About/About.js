import { Link } from 'react-router-dom'
import Person from '../../utils/assets/person.png';
import { skills } from '../../utils/context/constants';
import './About.css';

export const About = () => {
    return (
        <>
            <div className='about_person_container'>
                <img src={Person} alt='me' />
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    <path d="M81,57.5Q71,65,67.5,79Q64,93,49.5,94.5Q35,96,29.5,82.5Q24,69,23.5,59.5Q23,50,24.5,41Q26,32,33,26Q40,20,51,16.5Q62,13,70,21.5Q78,30,84.5,40Q91,50,81,57.5Z"></path>
                </svg>
            </div>

            <div className='about_me_container'>
                <div className='about_me_content'>
                    <h2>About me</h2>
                    <div className='about_me_description'>
                        <span>I'm a Full Stack developer heavily influenced by Backend.</span>
                        <span>From France.</span>
                    </div>
                    <div className='about_me_links'>
                        <span>See more</span>
                        <Link className='about_me_link' to='https://github.com/Quentin-Su/' rel='noreferrer' target='_blank' aria-label='My GitHub profile'>
                            <svg className='about_me_link_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </Link>
                        <Link className='about_me_link' to='https://www.linkedin.com/in/quentin-sussetto-882876238/' rel='noreferrer' target='_blank' aria-label='My Linkedin profile'>
                            <svg className='about_me_link_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </Link>
                    </div>
                </div>

                <div className='about_me_skills'>
                    <h2>Skills</h2>

                    <div className='about_me_skills_container'>
                        <div className='skills_container'>
                            <h3>Languages</h3>
                            <ul className='skills_list_container'>
                                {
                                    skills.Languages.map((value, index) => (
                                        <li className={`skill_item skill_item_${value.color}`} key={index}>{value.name}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='skills_container'>
                            <h3>Database</h3>
                            <ul className='skills_list_container'>
                                {
                                    skills.Database.map((value, index) => (
                                        <li className={`skill_item skill_item_${value.color}`} key={index}>{value.name}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='skills_container'>
                            <h3>Other</h3>
                            <ul className='skills_list_container'>
                                {
                                    skills.Other.map((value, index) => (
                                        <li className={`skill_item skill_item_${value.color}`} key={index}>{value.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='about_me_service'>
                    <h2>My Service</h2>

                    <div className='service_container'>
                        <div className='service_icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
                        </div>

                        <div className='service_content'>
                            <h3>Web Development</h3>
                            <p className='service_description'>I am a web developer specializing in creating websites, web applications and console applications. I create innovative, elegant, and efficient digital solutions to meet the unique needs of my clients. Please contact me to discuss your online project.</p>
                            <Link to={`mailto:Quentin.Sussetto@outlook.fr`} className='service_contact'>Contact me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};