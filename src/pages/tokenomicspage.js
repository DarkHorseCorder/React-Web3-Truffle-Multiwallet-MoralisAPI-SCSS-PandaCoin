import React, {useEffect, useState} from 'react';
import circle_color from '../img/circle_color.png';
import svg1 from "../img/svg1.svg"
import svg2 from "../img/svg2.svg"
import svg3 from "../img/svg3.svg"
import svg4 from "../img/svg4.svg"
import svg5 from "../img/svg5.svg"
import svg6 from "../img/svg6.svg"
import Ellipse_1 from '../img/Ellipse_1.svg'
import Ellipse_2 from '../img/Ellipse_2.svg'
import Ellipse_3 from '../img/Ellipse_3.svg'
import Ellipse_4 from '../img/Ellipse_4.svg'
import Ellipse_5 from '../img/Ellipse_5.svg'
import Ellipse_6 from '../img/Ellipse_6.svg'

function TokenomicsPage() {
  return (
    <section className="page__tokenomics">
        <div className="tokenomics__body">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Tokenomics</h2>
                    </div>
                </div>
                <div className="row tokenomics__content">
                    <div className="col-12 col-sm-6 col-lg-4 tokenomics-img__circle order-lg-2">
                        <img className="img-fluid" src={circle_color} alt="chart"/>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 align-self-center order-lg-1 tokenomics__left-column">
                        <div className="tokenomics__block">
                            <div className="tokenomics-block__img">
                                <img src={svg1} alert="svg1"/>
                            </div>
                            <div className="tokenomics-block__text">
                                <div className="block__text1">
                                    <div className="text1__row1 d-flex">
                                        <img src={Ellipse_1} alt="ellipse"/>
                                        <p>private sale 10%</p>
                                    </div>
                                </div>
                                <div className="text1__row2">
                                <p> 1,000,000,000 SYM</p>
                                </div>
                            </div>  
                        </div>

                        <div className="tokenomics__block">
                            <div className="tokenomics-block__img">
                                <img src={svg2} alert="svg2"/>
                            </div>
                            <div className="tokenomics-block__text">
                                <div className="block__text1">
                                    <div className="text1__row1 d-flex">
                                        <img src={Ellipse_2} alt="ellipse"/>
                                        <p>Public sale  30%</p>
                                    </div>
                                </div>
                                <div className="text1__row2">
                                    <p>3,000,000,000 SYM</p>
                                </div>
                            </div>  
                        </div>

                        <div className="tokenomics__block">
                            <div className="tokenomics-block__img">
                                <img src={svg3} alert="svg3"/>
                            </div>
                            <div className="tokenomics-block__text">
                                <div className="block__text1">
                                    <div className="text1__row1 d-flex">
                                        <img src={Ellipse_3} alt="ellipse"/>
                                        <p>Airdrop  10% </p>
                                    </div>
                                </div>
                                <div className="text1__row2">
                                    <p> 1,000,000,000 SYM</p>
                                </div>
                            </div>  
                        </div>
                    
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-6 offset-lg-0 col-lg-4 align-self-center order-3 tokenomics__right-column">
                        <div className="tokenomics__block">
                            <div className="tokenomics-block__img">
                                <img src={svg4} alert="svg4"/>
                            </div>
                            <div className="tokenomics-block__text">
                                <div className="block__text1">
                                    <div className="text1__row1 d-flex">
                                        <img src={Ellipse_4} alt="ellipse"/>
                                        <p>Team  10%</p>
                                    </div>
                                </div>
                                <div className="text1__row2">
                                <p> 1,000,000,000 SYM</p>
                                </div>
                            </div>  
                        </div>

                        <div className="tokenomics__block">
                            <div className="tokenomics-block__img">
                                <img src={svg5} alert="svg5"/>
                            </div>
                            <div className="tokenomics-block__text">
                                <div className="block__text1">
                                    <div className="text1__row1 d-flex">
                                        <img src={Ellipse_5} alt="ellipse"/>
                                        <p>Marketing  30%</p>
                                    </div>
                                </div>
                                <div className="text1__row2">
                                    <p>3,000,000,000 SYM</p>
                                </div>
                            </div>  
                        </div>

                        <div className="tokenomics__block">
                            <div className="tokenomics-block__img">
                                <img src={svg6} alert="svg6"/>
                            </div>
                            <div className="tokenomics-block__text">
                                <div className="block__text1">
                                    <div className="text1__row1 d-flex">
                                        <img src={Ellipse_6} alt="ellipse"/>
                                        <p>LP 10%</p>
                                    </div>
                                </div>
                            <div className="text1__row2">
                                <p> 1,000,000,000 SYM</p>
                            </div>
                            </div>  
                        </div>
                    </div>
                </div>       
            </div>
        </div>  
    </section>  
  );
}

export default TokenomicsPage;
