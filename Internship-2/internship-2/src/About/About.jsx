import React from 'react'
import './About.css'
import { assest } from '../assets/Image/assest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEnvelope, faFaceAngry, faStar, faStarHalfStroke, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBacon, faBaseball, faBasketball, faCheck, faPerson, faPersonArrowUpFromLine, faPersonBooth, faPersonBurst, faPersonCircleCheck, faPersonDrowning } from '@fortawesome/free-solid-svg-icons'
import { inertia, interpolate, motion } from 'framer-motion'
import { Route, Routes, Link, NavLink } from 'react-router'
import Term from '../Terms/Term'


/* This function is not working
const observer = new
      IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                        entry.target.classList.add("show")
                  } else {
                        entry.target.classList.remove("show")
                  }
            });
      });

const main = document.querySelectorAll("heading1");

main.forEach((heading1) => {
      observer.observe(heading1);
});
*/



const About = () => {

      return (
            <>

                  <Routes>
                        <Route path='/term' element={<Term />} />
                  </Routes>

                  <div>
                        <div className="main-content h-1150 w-full  bg-gray-900">
                              <motion.div
                                    initial={{ opacity: 0, y: 50, }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 50,
                                          damping: 10,
                                          delay: 0.5
                                    }}
                                    className="main-heading    text-center items-center pt-55">
                                    <p className='text-white text-xl'>Home -  <span>About us 1</span></p>
                                    <h1 className='text-white text-5xl'>About US</h1>
                              </motion.div>
                              <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 50,
                                          damping: 10,
                                          delay: 0.8
                                    }}
                                    className="content text-center items-center pt-55" >
                                    <button className='text-green-200 text-sm  bg-gray-600 w-42 h-7 rounded-4xl'>Passion meets purpose</button>
                                    <h1 className='text-white text-5xl m-2 p-2'>NextSaaS is defining the future <br /> landscape of business.</h1>
                                    <p className='text-gray-400'>In a rapidly evolving digital world, NextSaaS stands at the forefront of innovation, transforming how businesses <br />operate, connect, and grow.By delivering intelligent, scalable, and user-focused SaaS solutions,</p>

                              </motion.div>
                              <div className="img-section flex  p-25 mt-35 gap-10">
                                    <div className="img-1">
                                          <motion.img
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{
                                                      type: "spring",
                                                      stiffness: 50,
                                                      damping: 20,

                                                }} id="pic" className='rounded-3xl  mb-10' src={assest.vision1} alt="" />
                                          <motion.img
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 0.5 }}
                                                transition={{
                                                      type: "spring",
                                                      stiffness: 50,
                                                      damping: 20,

                                                }}
                                                id="pic" className='rounded-3xl ' src={assest.vision2} alt="" />

                                    </div>
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 50,
                                                damping: 20,

                                          }} className="img-2">
                                          <img id='pic-2' className='rounded-3xl ' src={assest.vision3} alt="" />
                                    </motion.div>
                              </div>
                              <div className="container-section  p-30 flex gap-20">
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="c-1 pt-20">
                                          <button className='text-green-200 text-sm  bg-gray-600 w-25 h-7 p-1 rounded-4xl'>Our mission</button>
                                          <h1 className='text-white text-5xl pt-5'>To help teams work and <br />grow with smart, secure <br />software.</h1>
                                          <p className='text-gray-400 pt-5'>We help companies turn messy workflows into <br /> manageable systems—one dashboard, one automation, one insight at a time.</p>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="c-2 bg-gray-800 rounded-2xl h-120 w-160 p-15">
                                          <div className="c-2-1 flex gap-3">
                                                <div className="d-1 h-70 w-80 bg-black rounded-3xl">
                                                      <h1 className='text-white text-2xl p-5'>Task <br />management</h1>
                                                      <div className="d-both flex gap-5">
                                                            <div className="d-img">
                                                                  <img className='h-16 w-16 ml-5 bg-purple-300 ' id='pic-5' src={assest.avatar7} alt="" />
                                                            </div>
                                                            <div>                                                                   <h1 className='text-white text-2xl '>Curious george</h1>
                                                                  <p className='text-gray-600 '>UI UX designer</p>
                                                            </div>
                                                      </div>
                                                      <hr className='h-0.5 w-60 ml-5 mt-8 bg-gray-700' />
                                                      <div className="both-last flex justify-between">
                                                            <p className='text-gray-400 m-5'>1 days Ago</p>
                                                            <FontAwesomeIcon className='font text-white mt-7 mr-5' icon={faStar} />
                                                      </div>

                                                </div>

                                                <div className="d-2 h-60 w-70 bg-black rounded-3xl">
                                                      <h1 className='text-white text-2xl p-5'>Process Tracking</h1 >
                                                      <img className='h-16 w-16 ml-18 mt-7 bg-purple-300 ' id='pic-5' src={assest.avatar2} alt="" />
                                                </div>
                                          </div>
                                          <div className="c-2-2 h-25 w-100 bg-gray-950 mt-5 rounded-3xl flex p-5">
                                                <img className='h-16 w-16 relative bg-purple-300 ' id='pic-5' src={assest.avatar1} alt="" />
                                                <img className='h-16 w-16  bg-purple-300 ' id='pic-5' src={assest.avatar2} alt="" />
                                                <img className='h-16 w-16 bg-purple-300 ' id='pic-5' src={assest.avatar3} alt="" />
                                                <div className="c-last ml-5">
                                                      <h1 className='text-white text-2xl '>Mischievous</h1 >
                                                      <p className='text-gray-400'>UI UX designer</p>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                              <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,

                                    }}
                                    className="center-heading items-center text-center pt-10">
                                    <div className="heading-1">
                                          <h1 className='text-white text-5xl'>Over a decade of experience in this field.</h1>
                                          <p className='text-gray-400 pt-5' >With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill, and <br />trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies, and</p>
                                    </div>
                                    <div className="heading-2 bg-gray-950 rounded-4xl h-50 w-300 m-auto mt-20 flex justify-around  p-15">
                                          <div className="d-1">
                                                <button className='bg-yellow-200 rounded-3xl h-12 w-20'><FontAwesomeIcon className='text-2xl' icon={faCircleCheck} /></button>
                                                <h1 className='text-2xl text-white pt-2'>80% Project completed</h1>
                                          </div>
                                          <hr className='bg-gray-800 h-30 w-0.5' />
                                          <div className="d-2">
                                                <button className='bg-blue-200 rounded-3xl h-12 w-20'><FontAwesomeIcon className='text-2xl' icon={faPersonCircleCheck} /></button>
                                                <h1 className='text-2xl text-white pt-2'>25 Team members</h1>
                                          </div>
                                          <hr className='bg-gray-800 h-30 w-0.5' />
                                          <div className="d-3">
                                                <button className='bg-yellow-600 rounded-3xl h-12 w-20'><FontAwesomeIcon className='text-2xl' icon={faThumbsUp} /></button>
                                                <h1 className='text-2xl text-white pt-2'>25 Satisfied Clients</h1>
                                          </div>
                                    </div>
                              </motion.div>
                              <div className="pic-section p-25 flex justify-between">
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="img-1">
                                          <button className='text-green-200 text-sm  bg-gray-600 w-35 h-7 p-1 rounded-4xl'>Reason to select us</button>
                                          <h1 className='text-5xl text-white pt-10'>A highly effective <br />
                                                unified platform</h1>
                                          <p className='text-gray-400   pt-5'>Until recently, the prevailing view assumed lorem ipsum was born as a <br /> nonsense text nothing Before & After magazine.</p>
                                          <ul className='text-white pt-20 ml-12'>
                                                <li>Analyze your data </li>
                                                <li className='mt-8 mb-8'>Collaborate securely </li>
                                                <li>Embedded analytics </li>
                                                <li className='mt-8 mb-8'>Easy & intuitive</li>
                                          </ul>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="side-img h-140 w-120 rounded-3xl relative">
                                          <img className='h-120 w-120 absolute right-20 pt-10' src={assest.circle} alt="" />
                                          <img className='rounded-3xl absolute top-4 right-2' src={assest.sc1} alt="" />
                                          <img className='rounded-3xl absolute h-45 w-100  bottom-2 right-2' src={assest.profile} alt="" />
                                    </motion.div>
                              </div>
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,

                                    }}
                                    className="page-1 items-center text-center">
                                    <button className='text-green-200 text-sm  bg-gray-600 w-35 h-7 p-1 rounded-4xl'>Our team </button>
                                    <h1 className='text-white text-5xl pt-5'>Our innovative, dynamic, <br /> and talented team</h1>
                                    <p className='text-gray-400 pt-5'>Our innovative, dynamic, and talented team is the driving force behind our success. <br /> Each member brings a unique blend of expertise</p>
                              </motion.div>
                              <div className="page-2 items-center justify-center pt-30 flex gap-40">
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="pic-1">
                                          <img id='pic-3' className='h-40 w-40 bg-white ' src={assest.avatar2} alt="" />
                                          <h1 className='text-white text-2xl pt-10 pl-3'>Darrell Steward</h1>
                                          <p className='text-gray-400 pl-15'>Monaco</p>
                                          <ul className='flex gap-5 mt-5 ml-5  text-white cursor-pointer '>
                                                <li>   <FontAwesomeIcon icon={faFacebook} /></li>
                                                <li>   <FontAwesomeIcon icon={faLinkedin} /></li>
                                                <li>   <FontAwesomeIcon icon={faGithub} /></li>
                                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                          </ul>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="pic-2">
                                          <img id='pic-3' className='h-40 w-40 bg-white ' src={assest.avatar3} alt="" />
                                          <h1 className='text-white text-2xl pt-10 pl-3'>Wade Warren</h1>
                                          <p className='text-gray-400 pl-15'>Tajikistan</p>
                                          <ul className='flex gap-5 mt-5 ml-5  text-white cursor-pointer '>
                                                <li>   <FontAwesomeIcon icon={faFacebook} /></li>
                                                <li>   <FontAwesomeIcon icon={faLinkedin} /></li>
                                                <li>   <FontAwesomeIcon icon={faGithub} /></li>
                                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                          </ul>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="pic-3">
                                          <img id='pic-3' className='h-40 w-40 bg-white ' src={assest.avatar12} alt="" />
                                          <h1 className='text-white text-2xl pt-10 pl-3'>Kathryn Murphy</h1>
                                          <p className='text-gray-400 pl-10'>Palestine, State of</p>
                                          <ul className='flex gap-5 mt-5 ml-5  text-white cursor-pointer '>
                                                <li>   <FontAwesomeIcon icon={faFacebook} /></li>
                                                <li>   <FontAwesomeIcon icon={faLinkedin} /></li>
                                                <li>   <FontAwesomeIcon icon={faGithub} /></li>
                                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                          </ul>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="pic-4">
                                          <img id='pic-3' className='h-40 w-40 bg-white ' src={assest.avatar5} alt="" />
                                          <h1 className='text-white text-2xl pt-10 pl-3'>Brooklyn Simmons</h1>
                                          <p className='text-gray-400 pl-12'>Palestine, State of</p>
                                          <ul className='flex gap-5 mt-5 ml-8  text-white cursor-pointer '>
                                                <li>   <FontAwesomeIcon icon={faFacebook} /></li>
                                                <li>   <FontAwesomeIcon icon={faLinkedin} /></li>
                                                <li>   <FontAwesomeIcon icon={faGithub} /></li>
                                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                          </ul>
                                    </motion.div>
                              </div>
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,

                                    }}
                                    className="page-3 flex items-center justify-center pt-30 ">
                                    <button id='button' className='bg-white text-black rounded-4xl w-35 h-10'>View all members</button>
                              </motion.div>
                        </div>
                        <div className="main-content-2 h-250 w-full bg-gray-800">
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,

                                    }}
                                    className="content text-center items-center pt-45">
                                    <button className='text-green-200 text-sm  bg-gray-600 w-42 h-9 rounded-4xl'>Customer success</button>
                                    <h1 className='text-white text-6xl m-2 p-2'>Real people. Real results.</h1>
                                    <p className='text-gray-400'>“Nextsaas delivered our entire platform ahead of schedule—flawless <br />execution and real partnership.”</p>

                              </motion.div>
                              <div className="bottom-1 flex m-20 gap-5 ">
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-1 h-90 w-90 bg-gray-900 rounded-3xl p-8 gap-10">
                                          <img id="pic-4" className='bg-white ' src={assest.avatar3} alt="" />
                                          <p className='text-gray-400 pt-5'>"Game-changing platform that transformed <br />our cloud infrastruture management. Expectional<br />
                                                scalability and performence improvements."</p>
                                          <h1 className='text-white text-2xl pt-5'>Michael Wilson</h1>
                                          <p className='text-gray-400'>Cloud Architect, Amanzon AWS</p>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-1 h-90 w-90 bg-gray-900 rounded-3xl p-8 gap-10">
                                          <img id="pic-4" className='bg-white ' src={assest.avatar7} alt="" />
                                          <p className='text-gray-400 pt-5'>"The software streamlined our operation and <br />
                                                improving team productivy by 40%. Outstanding
                                                <br />
                                                support and regular update keeps us ahead of curve."</p>
                                          <h1 className='text-white text-2xl pt-5'>Robert Andersion</h1>
                                          <p className='text-gray-400'>Senior IT Director, Microsoft</p>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-1 h-90 w-90 bg-gray-900 rounded-3xl p-8 gap-10">
                                          <img id="pic-4" className='bg-white ' src={assest.avatar1} alt="" />
                                          <p className='text-gray-400 pt-5'>"Implementing this solution reduced our <br />infrastructure costs by 60% while enhancing our <br />
                                                system reliabilty and security measures."</p>
                                          <h1 className='text-white text-2xl pt-5'>Jennifer Martinez</h1>
                                          <p className='text-gray-400'>CTO, Oracle</p>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-1 h-90 w-90 bg-gray-900 rounded-3xl p-8 gap-10">
                                          <img id="pic-4" className='bg-white ' src={assest.avatar2} alt="" />
                                          <p className='text-gray-400 pt-5'>"The platform's AI capabilites and automation<br />features have revoltionized our development<br />
                                                workflow, cutting project delivery times in half."</p>
                                          <h1 className='text-white text-2xl pt-5'>David Thompson</h1>
                                          <p className='text-gray-400'>VP Engering, Intel</p>
                                    </motion.div>
                              </div>
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,

                                    }}
                                    className="button flex justify-center items-cente">
                                    <button id='button' className='bg-gray-900 text-white cursor-pointer rounded-3xl w-40 h-10 '>View all receive</button>

                              </motion.div>
                        </div>
                        <div className="bottom-content h-160 w-full  bg-gray-900 p-20">
                              <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,

                                    }}
                                    className="bottom-1 h-100 w-340 bg-gray-950 rounded-3xl p-20 flex gap-30">
                                    <motion.div
                                          initial={{ opacity: 0, x: -30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-1 ">
                                          <button className='text-green-200 text-sm  bg-gray-600 w-35 h-7 p-1 rounded-4xl'>Reason to select us</button>
                                          <h1 className='text-white text-5xl pt-5'>Build a complete website <br /> using the assistance</h1>
                                          <p className='text-gray-300 pt-5 '>Start your free trial today and see your ideas come to life easily and creatively.</p>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-2 pt-10">
                                          <input className='text-white bg-gray-700 h-12 w-75 rounded-3xl border-0 pl-5 ' type="email" placeholder='Enter your email' /> <button className='text-white bg-blue-600 h-12 w-35 rounded-3xl '>Get startted</button>
                                          <p className='text-gray-400 m-5'><FontAwesomeIcon icon={faCheck} className='text-white text-sm  ' /> No credit card required    <span className='p-15'> <FontAwesomeIcon icon={faCheck} className='text-white text-sm  ' /> 14-Day free trial</span> </p>

                                    </motion.div>
                              </motion.div>
                        </div>
                        <div className="footer h-150 w-full bg-gray-950 p-30 ">
                              <div className="footer-section flex gap-40">
                                    <motion.div
                                          initial={{ opacity: 0, x: -30, y: 40 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="section-1 ">
                                          <img src={assest.dark} alt="" />
                                          <h1 className='text-white text-xl pt-5'>Turpis tortor nunc sed amet et faucibus vitae  morbi congue sed id mauris.</h1>
                                          <div className="icons  text-white ">
                                                <ul className='flex gap-3 mt-5 cursor-pointer '>
                                                      <li>   <FontAwesomeIcon icon={faFacebook} /></li>
                                                      <li>  <FontAwesomeIcon icon={faInstagram} /></li>
                                                      <li>   <FontAwesomeIcon icon={faYoutube} /></li>
                                                      <li>   <FontAwesomeIcon icon={faLinkedin} /></li>
                                                      <li>   <FontAwesomeIcon icon={faBasketball} /></li>
                                                </ul>
                                          </div>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30, y: 40 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="section-2 text-white ">
                                          <ul >
                                                <li>Company</li>
                                                <li className='btn pt-8 cursor-pointer' >About Us</li>
                                                <li className='btn pt-8 cursor-pointer'>Carrer</li>
                                                <li className='btn pt-8 cursor-pointer'>Case studies</li>
                                                <li className='btn pt-8 cursor-pointer'>Contact us</li>
                                          </ul>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30, y: 40 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="section-3 text-white">
                                          <ul>
                                                <li>Support</li>
                                                <li className='btn pt-8 cursor-pointer'>FAQ </li>
                                                <li className='btn pt-8 cursor-pointer'>Documentation</li>
                                                <li className='btn pt-8 cursor-pointer'>Tutorial</li>
                                                <li className='btn pt-8 cursor-pointer'>Support</li>
                                          </ul>
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, x: 30, y: 40 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="section-4 text-white">
                                          <ul>
                                                <li>Legal Policies</li>
                                                <li className='btn pt-8 cursor-pointer '>Terms & Conditions</li>
                                                <li className='btn pt-8 cursor-pointer'>Privacy Policy</li>
                                                <li className='btn pt-8 cursor-pointer'>Refund Policy</li>
                                                <li className='btn pt-8 cursor-pointer'>GDPR Compliance</li>
                                                <li className='btn pt-8 cursor-pointer'>Affiliate Policy</li>
                                          </ul>
                                    </motion.div>
                              </div>
                              <hr className='min-h-0.5 w-320 bg-white mt-15' />
                              <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 60,
                                          damping: 30,
                                    }}
                                    className="last">
                                    <p className='text-xl text-gray-400 text-center pt-5'>
                                          Copyright ©NextSaaS – smart application for modern business</p>

                              </motion.div>
                        </div>
                  </div >

            </>

      )
}

export default About