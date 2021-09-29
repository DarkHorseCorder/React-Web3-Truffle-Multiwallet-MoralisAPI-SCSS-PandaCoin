import React, {useEffect, useState} from 'react';
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__body">
            <div className="container">
                <div className="row footer__row1">
                    <div className= "col-6 footer__logo">
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div className="col-6 col-sm-12 col-lg-6 footer__menu">
                        <ul className="d-block d-sm-flex ">
                            <li><a  href="index.html">Home</a></li>
                            <li><a  href="#">Tokenomics</a></li>
                            <li><a  href="#">Roadmap</a></li>
                            <li><a  href="#">Partners</a></li>
                            <li><a  href="#">Contact Us</a></li>
                        </ul>
                    </div>   
                </div>
                
                <div className="row footer__row2">
                    <div className="col-md-6 col-12">
                        <p>© 2022 [NAME]. All Rights Reserved – [NAME] is not an investment. [NAME] makes no promises and is 
                        not responsible htmlFor any losses or errors use at your own risk. Designed by </p>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="privacy">
                            <a href="#" className="terms">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>  
  );
}

export default Footer;
