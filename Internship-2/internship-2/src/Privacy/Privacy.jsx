import React from 'react'
import './Privacy.css'
import { assest } from '../assets/Image/assest'
import { inertia, interpolate, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon, faBaseball, faBasketball, faCheck, faPerson, faPersonArrowUpFromLine, faPersonBooth, faPersonBurst, faPersonCircleCheck, faPersonDrowning } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Privacy = () => {
      return (
            <div className="main">
                  <div className="main-section h-880 w-full bg-gray-900">
                        <motion.div
                              initial={{ opacity: 0, y: 40, x: 0 }}
                              whileInView={{ opacity: 1, y: 0, x: 0 }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 30,


                              }}
                              className="heading text-center pt-50">
                              <p className='text-white'>Home - Privacy policy</p>
                              <h1 className='text-white text-6xl'>Privacy policy</h1>
                        </motion.div>
                        <div className="content-section m-32">
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30,


                                    }}
                                    className="content-headind">
                                    <h1 className='text-white text-6xl'>Data protection guidelines</h1>
                                    <p className='text-gray-400 mt-3'><span className='text-white'>NextSaaS </span>is a product operated by <span className='text-white'> NextSaaS Technologies LLC</span>. We specialize in property management solutions, empowering businesses worldwide to streamline their operations  efficiently. We are committed to protecting your privacy and handling your information transparently.</p>
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
                                    className="content-1 mt-18">
                                    <h1 className='text-gray-50 text-4xl'>NextSaaS privacy policy</h1>
                                    <p className='text-gray-400 mt-3'>This Privacy Policy describes how your personal information is collected, used, and shared when you visit, subscribe, register, or make a purchase from <span className='text-white'>https://nextsaas.com</span> (the "Site").</p>


                                    <h1 className='text-gray-50 text-4xl mt-18'>Personal information we collect</h1>
                                    <p className='text-gray-400 mt-3'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and cookies installed on your device. Additionally, as you browse the Site, we collect information about the individual pages you view, what websites or search terms referred you to the Site, and how you interact with the Site. We call this automatically-collected information <span className='text-white'> "Device Information."</span></p>

                                    <ul className='ul mt-5 ml-3'>
                                          <li className='text-gray-400 '> <span className='text-white'>Cookies -</span>  Data files placed on your device, often including an anonymous unique identifier <br />( Learn more about cookies and how to disable them: http://www.allaboutcookies.org )</li>
                                          <li className='text-gray-400 mt-3'>  <span className='text-white'>Log Files -</span>  Track actions on the Site and collect IP address, browser type, ISP, referring/exit pages, and timestamps.</li>
                                          <li className='text-gray-400 mt-3'>  <span className='text-white'>Web Beacons, Tags, and Pixels -</span>  Electronic files to monitor site usage and interaction.</li>
                                          <li className='text-gray-400 mt-3'><span className='text-white'>Google Analytics and Pixels – </span>Collect traffic-related information and interaction behavior.</li>
                                    </ul>
                              </motion.div>
                              <div className="content-2 mt-25 flex gap-20">
                                    <motion.div
                                          initial={{ opacity: 0, y: 0, x: -30 }}
                                          whileInView={{ opacity: 1, y: 0, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 80,
                                                damping: 30
                                          }}
                                          className="side-1">
                                          <p className='text-gray-400'>When you make or attempt to purchase through the Site, we collect information such as your name, email address, billing address, shipping address, payment details, and any other relevant data necessary to process your order.</p>
                                          <img className='rounded-3xl mt-25' src={assest.privacy} alt="" />
                                    </motion.div>
                                    <motion.div
                                          initial={{ opacity: 0, y: 0, x: 30 }}
                                          whileInView={{ opacity: 1, y: 0, x: 0 }}
                                          viewport={{ once: true, amount: 0.5 }}
                                          transition={{
                                                type: "spring",
                                                stiffness: 80,
                                                damping: 30
                                          }}
                                          className="side-2 h-160 w-380 rounded-3xl p-10 bg-gray-950">
                                          <p className='text-white'>Your Name</p>
                                          <input className='bg-gray-900 text-gray-200 w-full rounded-4xl h-12 p-5 mt-5 ' type="text" placeholder='Enter your name' />

                                          <p className='text-white mt-5'>Billing and shipping addresses</p>
                                          <input className='bg-gray-900 text-gray-200 w-full rounded-4xl h-12 p-5 mt-5 ' type="text" placeholder='Billing and shipping addresses' />

                                          <p className='text-white mt-5'>Payment information</p>
                                          <input className='bg-gray-900 text-gray-200 w-full rounded-4xl h-12 p-5 mt-5 ' type="text" placeholder='credit card,payapl or bank details' />

                                          <p className='text-white mt-5'>Email address</p>
                                          <input className='bg-gray-900 text-gray-200 w-full rounded-4xl h-12 p-5 mt-5 ' type="text" placeholder='Enter your email address' />
                                          <br />

                                          <input className='mt-8' type="checkbox" name="check" id="" /><span className='text-white'>I agree with the <span className='text-blue-400 '>terms and conditions</span> </span>
                                          <br />
                                          <button className='submit bg-pink-100 w-full h-12 text-center rounded-4xl mt-5'>Submit</button>
                                    </motion.div>
                              </div>
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30
                                    }}
                                    className="content-3">
                                    <h1 className='text-gray-50 text-4xl mt-18 '>How we use your personal information</h1>
                                    <p className='text-gray-400 mt-3'>We use the collected Order Information to:</p>
                                    <ul className='ml-3 ul'>
                                          <li className='text-gray-400 mt-5'>Process your orders, payments, and generate invoices</li>
                                          <li className='text-gray-400 mt-5'>Communicate with you</li>
                                          <li className='text-gray-400 mt-5'>Screen for potential fraud or risks</li>
                                          <li className='text-gray-400 mt-5'> Provide you with information or promotions related to our services, when aligned with your preferences</li>
                                    </ul>
                                    <p className='text-white mt-5'>We use the collected Order Information to:</p>
                                    <ul className='ml-5 ul'>
                                          <li className='text-gray-400 mt-5'>Improve and optimize the Site experience</li>
                                          <li className='text-gray-400 mt-5'>Analyze customer interactions for performance tracking</li>
                                          <li className='text-gray-400 mt-5'> Screen for potential risk and fraud</li>
                                    </ul>
                                    <h1 className='text-gray-50 text-4xl mt-18 '>Sharing your personal information</h1>
                                    <p className='text-gray-400 mt-3'>We share your Personal Information with trusted third-party service providers to help us operate effectively:</p>
                                    <ul className='ml-5 ul'>
                                          <li className='text-gray-400 mt-5'>Google Analytics: To understand customer interactions and optimize experience (Learn more: Google Privacy Policy )</li>
                                          <li className='text-gray-400 mt-5'>Payment processors (PayPal, Stripe)</li>
                                    </ul>
                              </motion.div>
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30
                                    }}
                                    className="content-4">
                                    <h1 className='text-gray-50 text-4xl mt-18 '>Do not track</h1>
                                    <p className='text-gray-400 mt-3'>Please note, we do not alter our Site’s data collection practices when we detect a "Do Not Track" signal from your browser.</p>
                                    <h1 className='text-gray-50 text-4xl mt-18'>Your rights</h1>

                                    <p className='text-gray-400 mt-3'>If you are a resident of the European Economic Area (EEA):</p>
                                    <ul className='ul ml-5'>
                                          <li className='text-gray-400 mt-5'>You have the right to access, update, or delete your personal information.</li>
                                          <li className='text-gray-400 mt-5'>If you wish to exercise these rights, please contact us at <span className='text-white'>support@nextsaas.com</span></li>
                                    </ul>

                                    <h1 className='text-gray-50 text-4xl mt-18 '>Data retention</h1>
                                    <p className='text-gray-400 mt-3'>We will retain your Order Information for our records unless you ask us to delete this information.</p>

                                    <h1 className='text-gray-50 text-4xl mt-18 '>Minors</h1>
                                    <p className='text-gray-400 mt-3'>Our Site is not intended for individuals under the age of 18.</p>

                                    <h1 className='text-gray-50 text-4xl mt-18 '>Changes</h1>
                                    <p className='text-gray-400 mt-3'>We may update this Privacy Policy periodically to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>
                              </motion.div>
                        </div>
                  </div>
                  <div className="second-section h-290 bg-gray-950 ">
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
                                    <button className='text-green-200 text-sm  bg-gray-600 w-30 h-8 p-1 rounded-4xl'>Get started</button>
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
                                    <input className='text-white bg-gray-700 h-12 w-75 rounded-3xl border-0 pl-5 mt-20' type="email" placeholder='Enter your email' /> <button className='button text-white bg-blue-600 h-12 w-35 rounded-3xl '>Get startted</button>
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


            </div >
      )
}

export default Privacy