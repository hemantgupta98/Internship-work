import React from 'react'
import './Term.css'
import { inertia, interpolate, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacon, faBaseball, faBasketball, faCheck, faPerson, faPersonArrowUpFromLine, faPersonBooth, faPersonBurst, faPersonCircleCheck, faPersonDrowning } from '@fortawesome/free-solid-svg-icons'
import { assest } from '../assets/Image/assest'
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Term = () => {
      return (
            <>
                  <div className="main">
                        <div className="main-section h-750 w-full bg-gray-900 ">
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30,
                                          delay: 0.8

                                    }}
                                    className="heading pt-50 text-center ">
                                    <p className='text-gray-200 text-xl'>Home - Terms & Conditions</p>
                                    <h1 className='text-white text-5xl'>Terms & Conditions</h1>
                              </motion.div>
                              <motion.div
                                    initial={{ opacity: 0, y: 40, x: 0 }}
                                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                          type: "spring",
                                          stiffness: 80,
                                          damping: 30,
                                          delay: 1
                                    }}
                                    className="content-heading m-30">
                                    <h1 className='text-white text-5xl'>Terms & Conditions</h1>
                                    <p className='text-gray-400 pt-5 '>This site, nextsaas.com (hereafter referred to as NextSaaS, site, or website) is owned and operated by NextSaaS Technologies LLC (hereafter referred to as NextSaaS, we, or company).</p>
                                    <p className='text-gray-400 pt-8'>Please carefully read, review, and understand our Terms and Conditions before using any services or products from nextsaas.com. Your access to and use of this website and its products indicate that you accept and agree to be bound by these terms and conditions.</p>
                                    <p className='text-gray-400 pt-8'>If you do not agree with these terms, you should leave the site immediately and not use any of the materials or services available here.</p>
                              </motion.div>
                              <div className="content-section m-30">

                                    <h1 className='text-white text-4xl '>1. Limitation of liability</h1>
                                    <p className='text-gray-400 mt-5'>Under no circumstances shall NextSaaS be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to loss of data, profits, or business interruption, arising out of the use, or inability to use, the materials on this site, even if NextSaaS or an authorized representative has been advised of the possibility of such damages.</p>
                                    <p className='text-gray-400 mt-5'>If your use of materials from this site results in the need for servicing, repair, or correction of equipment or data, you assume all associated costs.</p>


                                    <h1 className='text-white text-4xl mt-20'>2. License</h1>
                                    <p className='text-gray-400 mt-5'>NextSaaS services, platforms, and tools are provided under a commercial license agreement. Each subscription or license purchased includes access to updates and support for 365 days from the completion of the order.</p>
                                    <p className='text-gray-400 mt-5'>License activation is necessary to receive updates and premium support. You are not permitted to resell, redistribute, or offer NextSaaS products or services, modified or unmodified, without our written consent.</p>

                                    <h1 className='text-white text-4xl mt-20'>3. Ownership and liability</h1>
                                    <p className='text-gray-400 pt-5'>All NextSaaS products, solutions, and materials remain the intellectual property of NextSaaS Technologies LLC. You may not claim ownership of our services, whether modified or <br />unmodified.</p>
                                    <p className='text-gray-400 mt-5'>Our products and services are provided “as is” without warranty of any kind, expressed or implied. NextSaaS is not liable for any losses or damages resulting from the use or inability <br /> to use its products.</p>
                                    <p className='text-gray-400 mt-5' >User accounts and product licenses are <span className='text-white '>non-transferable</span> . For agencies and development partners: Please ensure your clients purchase their own licenses if they require direct <br /> support access.</p>

                                    <h1 className='text-white text-4xl mt-20'>4. Refund policy</h1>
                                    <p className='text-gray-400 mt-5' >We believe you all love NextSaaS! Still, if you're not satisfied, we offer a 14-day no-questions-asked refund policy. Simply contact our support team within 14 days of your original purchase, and we all issue a full refund. We might ask for feedback to help us improve, but you are under no obligation to share.</p>
                                    <button className='h-12 w-70 rounded-3xl bg-white text-black mt-20'>Learn more about our refund policy</button>

                                    <h1 className='text-white text-4xl mt-20'>5. Warranty</h1>
                                    <p className='text-gray-400 mt-5'>NextSaaS services are provided without any warranty, either expressed or implied. We do not guarantee full compatibility with all browsers, devices, third-party plugins, or external systems. Before purchasing, you may review demos or contact our support team to verify compatibility with your setup.</p>

                                    <h1 className='text-white text-4xl mt-20'>6. Account termination and suspension</h1>
                                    <p className='text-gray-400 mt-5'>NextSaaS reserves the right to suspend or terminate any user account without prior notice for reasons including but not limited to</p>
                                    <ul id='ul' className='text-gray-400 mt-5'>
                                          <li className=' ml-3'>Abusive, defamatory, or malicious behavior towards NextSaaS staff or customers</li>
                                          <li className='mt-3 ml-3'>Spreading false information or misleading reviews</li>
                                          <li className='mt-3 ml-3'>Unauthorized resale, distribution, or promotion of competitor products</li>
                                          <li className='mt-3 ml-3'>Involvement in hacking, spamming, piracy, or illegal activities</li>
                                          <li className='mt-3 ml-3'>Security threats due to account compromise or unauthorized sharing</li>
                                    </ul>

                                    <h1 className='text-white text-4xl mt-20'>7. Privacy policy</h1>
                                    <p className='text-gray-400 mt-5'>We value your privacy. NextSaaS does not sell, rent, or share your personal information with third parties. Your data is used solely for purposes such as</p>
                                    <ul id='ul' className='text-gray-400 mt-5'>
                                          <li className=' ml-3'>Order processing</li>
                                          <li className='mt-3 ml-3'>Account management</li>
                                          <li className='mt-3 ml-3'>Billing disputes</li>
                                          <li className='mt-3 ml-3'>Fraudulent activities</li>
                                          <li className='mt-3 ml-3'>Legal compliance</li>
                                    </ul>
                                    <p className='text-gray-400 mt-5'>By using NextSaaS services, you consent to the collection and use of your data by our Privacy Policy.</p>
                                    <button className='content-button h-12 w-70 rounded-3xl bg-white text-black mt-20'>Read our detailed privacy policy</button>
                              </div>

                        </div>
                        <div className="second-section h-290 bg-gray-950 ">
                              <motion.div
                                    className="bottom-1 p-30  flex gap-60">
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
                              </motion.div>
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

export default Term