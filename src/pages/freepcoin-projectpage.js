import React, {useEffect, useState} from 'react';
import icon1 from '../img/icon1.png'
import icon2 from '../img/iconsvg2.svg'
import icon3 from '../img/iconsvg3.svg'
import soc1 from '../img/soc1.svg'
import soc2 from '../img/soc2.svg'
import soc3 from '../img/soc3.svg'
import soc4 from '../img/soc4.svg'
import soc5 from '../img/soc5.svg'
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import facebook from '../img/faceb.svg'
import linkedin from '../img/linkedin.svg'

function FreecoinProjectPage() {
  return (
    <section className="page__freepcoin-project">
        <div className="freepcoin-project__body">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4"> 
                        <div className="project__block">
                            <div className="project-block__image">
                                <img src={icon1} alt="icon"/>
                                <h3>The freepcoin<br/>Project</h3>  
                            </div>
                            <p>NAME s mission is to become the most decentralized and most fairly distributed meme-token in the world. We’ve pioneered a distribution mechanism that allows us to distribute tokens in a social way, preventing whale-dumps and thus creating a safe-haven asset that can serve as a piggy bank htmlFor years to come. Additionally, our token holders receive 3% of all transactions, providing the benefit of automatic yield farming.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4"> 
                        <div className="project__block">
                            <div className="project-block__image">
                                <img src={icon2} alt="icon"/>
                                <h3>The <br/> problem</h3>  
                            </div>
                            <p>NAME solves the problem of unfair token distribution and frequent whale dumps. Take Dogecoin, htmlFor example: the    largest holder owns 28% of all tokens. This holder could single-handedly crash the price by an estimated 96%.
                            Most other tokens have a similarly uneven supply distribution. For these tokens, a handful of individuals own major portions of the supply, resulting in continuous dumps and unsustainable price pressure in the long term.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4"> 
                        <div className="project__block">
                            <div className="project-block__image">
                                <img src={icon3} alt="icon"/>
                                <h3>The <br/>solution</h3>  
                            </div>
                            <p>NAME solves this problem through an innovative social distribution mechanism. This mechanism is responsible htmlFor distributing 80% of all eventually circulating SYM tokens to a wide range of holders (2 million token holders, to be precise), making NAME the most decentralized meme-token in existence.
                            This is done by programmatically subscribing to all transactions on Binance Smart Chain (which are public by nature) and randomly picking a couple thousand winners each day, who are gifted with a set number of SYM tokens. The receivers of SYM tokens usually become long-term holders and loyal project supporters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center home__soc-icon">
                        <div className="soc__bg"><a  href="#"><img src={soc1} alt="soc_icon"/></a></div>
                        <div className="soc__bg"><a  href="#"><img src={soc2} alt="soc_icon"/></a></div>
                        <div className="soc__bg"><a  href="#"><img src={soc3} alt="soc_icon"/></a></div>
                        <div className="soc__bg"><a  href="#"><img src={soc4} alt="soc_icon"/></a></div>
                        <div className="soc__bg"><a  href="#"><img src={soc5} alt="soc_icon"/></a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>OUR TEAM</h2>
                    </div>
                </div>
                <div className="row row__team">
                    <div className="col-6 col-sm-3 text-center team__block">
                        <img src={avatar1} alt="freep"/>
                        <h4>Jamie Hill</h4>
                        <p>Co-FOUNDER</p> 
                        <div className="soc-icon__team">
                            <a  href="#"><img src={facebook} alt="facebook"/></a> 
                            <a  href="#"><img src={linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 text-center team__block">
                        <img src={avatar3} alt="freep"/>
                        <h4>Steven Crossley</h4>
                        <p>Co-FOUNDER</p> 
                        <div className="soc-icon__team">
                            <a  href="#"><img src={facebook} alt="facebook"/></a> 
                            <a  href="#"><img src={linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 text-center team__block">
                        <img src={avatar2} alt="freep"/>
                        <h4>William Kennedy</h4>
                        <p>Co-FOUNDER</p> 
                        <div className="soc-icon__team">
                            <a  href="#"><img src={facebook} alt="facebook"/></a> 
                            <a  href="#"><img src={linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 text-center team__block">
                        <img src={avatar4} alt="freep"/>
                        <h4>Reginald  Spencer</h4>
                        <p>Co-FOUNDER</p> 
                        <div className="soc-icon__team">
                            <a  href="#"><img src={facebook} alt="facebook"/></a> 
                            <a  href="#"><img src={linkedin} alt="linkedin"/></a>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </section>
  );
}

export default FreecoinProjectPage;
