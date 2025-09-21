import React from 'react'
import './Affiliate.css'
import { assest } from '../assets/Image/assest'
import { inertia, interpolate, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon, faBaseball, faBasketball, faCheck, faPerson, faPersonArrowUpFromLine, faPersonBooth, faPersonBurst, faPersonCircleCheck, faPersonDrowning } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Affiliate = () => {
      return (
            <>
                  <div className="main">
                        <div className="main-section h-400 w-full bg-gray-900">
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30,


                                    }}
                                    className="main-heading text-center pt-50">
                                    <p className='home text-white'>Home - Affiliate Policy</p>
                                    <h1 className='text-white text-5xl mt-5'>Affiliate Policy  </h1>

                                    <button className='text-green-400 text-sm  bg-gray-600 w-42 h-7 rounded-4xl mt-30' >Passion meets purpose</button>
                                    <h1 className='text-white text-5xl mt-5'>Affiliate terms & conditions  </h1>
                                    <p className='text-gray-400 mt-5'>Welcome to the NextSaaS Affiliate Program! <br />
                                          Please read these terms carefully to ensure you fully understand how our program works and what is expected.</p>
                              </motion.div>
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30,


                                    }}
                                    className="content-section">
                                    <div className="content-1 p-30">
                                          <img src={assest.affiliates} alt="" />
                                    </div>
                              </motion.div>
                        </div>
                        <div className="main-container  h-370 bg-gray-950 ">
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: -30 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30,


                                    }}
                                    className="center-content">
                                    <div className="container ">
                                          <h1 className='text-white text-4xl'>How does it work?</h1>
                                          <p className='text-gray-400 mt-5'>As a NextSaaS affiliate, you are part of our extended sales team. <br />
                                                For every customer you refer who completes a purchase, you'll earn a commission. The more you refer, the more you can  <br />earn — there's no limit!</p>

                                          <h1 className='text-white text-4xl mt-20'>How will I know if I made a sale?</h1>
                                          <p className='text-gray-400 mt-5'>You'll receive a notification when a referred customer makes a purchase. You can also track your sales and commissions in <br /> real-time from your affiliate dashboard.</p>

                                          <h1 className='text-white text-4xl mt-20'>How do I get paid?</h1>
                                          <ul className='ml-3 ul'>
                                                <li className='text-gray-400 mt-5'> All payments are processed via PayPal.</li>
                                                <li className='text-gray-400 mt-5'>  Ensure your PayPal account information is correctly set in your affiliate profile.</li>
                                          </ul>

                                          <h1 className='text-white text-4xl mt-20'>When are payouts made?</h1>
                                          <ul className='ml-3 ul'>
                                                <li className='text-gray-400 mt-5'>  Payouts are made at the end of each month.</li>
                                                <li className='text-gray-400 mt-5'> Minimum payout threshold: $100.</li>
                                                <li className='text-gray-400 mt-5'> Commissions must be verified manually before release.</li>
                                                <li className='text-gray-400 mt-5'>   For example, commissions earned in May will be paid by June 30..</li>
                                          </ul>
                                          <h1 className='text-white text-4xl mt-20'>Cookie duration</h1>
                                          <p className='text-gray-400 mt-5'>When a visitor clicks your link, a 30-day cookie is set. If they complete a purchase within that period, you receive the <br /> commission — unless another affiliate's link overwrites yours.</p>

                                    </div>
                              </motion.div>
                        </div>
                        <div className="second-section h-290 w-full bg-gray-950 ">
                              <div className="bottom-1 p-30  flex gap-60">
                                    <motion.div
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 60,
                                                damping: 30,

                                          }}
                                          className="b-1 ">
                                          <button className=' text-green-200 text-sm  bg-gray-600 w-30 h-8 p-1 rounded-4xl'>Get started</button>
                                          <h1 className='text-white text-4xl pt-5'>Ready to start earning <br />
                                                with NextSaaS?</h1>
                                          <p className='text-gray-400 pt-5 '>If you have any questions, feel free to reach out to our team.</p>
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
                                          className="b-2 ">
                                          <input className='text-white bg-gray-700 h-12 w-75 rounded-3xl border-0 pl-5 mt-20' type="email" placeholder='Enter your email' />      <button className='button  text-white bg-blue-600 h-12 w-35 rounded-3xl '>Get startted</button>
                                          <p className='text-gray-400 m-5'><FontAwesomeIcon icon={faCheck} className='text-white text-sm  ' /> No credit card required    <span className='p-15'> <FontAwesomeIcon icon={faCheck} className='text-white text-sm  ' /> 14-Day free trial</span> </p>

                                    </motion.div>
                              </div>
                              <div className="footer  m-30 mt-40 ">
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
                                    <hr className='min-h-0.5 w-320 bg-white mt-25' />
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
                                          <p className='copyright text-xl  text-gray-400 text-center pt-10'>
                                                Copyright ©NextSaaS – smart application for modern business</p>

                                    </motion.div>
                              </div>
                        </div>

                  </div>
            </>
      )
}

export default Affiliate