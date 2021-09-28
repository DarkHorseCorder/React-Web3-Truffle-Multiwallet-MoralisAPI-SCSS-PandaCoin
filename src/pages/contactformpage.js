import React, {useEffect, useState} from 'react';
import facebook from '../img/facebook_form.svg'
import linkedin from '../img/linkedin_form.svg'
import telegram from '../img/telegram_form.svg'
import twitter from '../img/twitter_form.svg'
function ContactformPage() {
  return (
    <section className="page__contact-form">
        <div className="contact-form__body">
            <div className="container">
                <div className="row form__home animate__title wow animate__animated  animate__slideInUp animate__fast">
                    <div className="col-12 col-lg-4">
                        <div className="form-home__left-col">
                            <h2>Contact Us</h2>
                            <p>For more information, you can contact us at one of the following emails.</p>
                            <h5>Information</h5>
                            <a href="mailto:info@freepcoin.com">info@freepcoin.com</a> 
                            <h5>Technical Support</h5>
                            <a href="mailto:support@freepcoin.com">support@freepcoin.com</a>
                            <h5>Socials</h5>
                            <div className="form-home__soc-icon">
                                <a  href="#"><img src={facebook} alt="facebook"/></a> 
                                <a  href="#"><img src={linkedin} alt="linkedin"/></a>
                                <a  href="#"><img src={telegram} alt="telegram"/></a> 
                                <a  href="#"><img src={twitter} alt="twitter"/></a>
                            </div>
                        </div>
                    </div>    
                    <div className="col-12 col-lg-8">
                        <div className="form-home__right-col">
                            <h2>drop us a line</h2> 
                            <div className="form-home__contacts">
                                <form action="#" method="post">
                                    <div className="form-home__info">
                                        <input type="text" placeholder="Your Name" id="name" name="name"/>
                                        <input type="email" placeholder="Your Email" name="email" id="email"/>
                                        <input type="text" placeholder="Subject" id="subject" name="subject"/>
                                        <textarea id="message" name="message" rows="5" cols="40" placeholder="Message"></textarea>
                                    </div>
                                    <div className="contacts__button">  
                                    <button className="color__button">send message</button>
                                    </div>
                                </form>
                            </div> 
                    </div> 
                    </div>
                </div>
            </div>       
        </div>
    </section> 
  );
}

export default ContactformPage;
