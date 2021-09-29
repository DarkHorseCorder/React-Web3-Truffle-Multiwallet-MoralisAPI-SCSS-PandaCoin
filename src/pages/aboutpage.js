import React, {useEffect, useState} from 'react';
import panda3 from '../img/panda_img3.png'
function AboutPage() {
  return (
    <section className="page__about">
        <div className="about__body">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5">
                        <div className="about__content">
                            <h2>ABOUT US</h2>
                            <p>Nullam viverra nulla nec aliquet ultricies. Fusce pulvinar, erat ac ullamcorper convallis, quam sapien condimentum orci, sit amet venenatis quam nibh nec diam. Suspendisse potenti. Etiam non interdum mi. Aliquam volutpat massa non lorem iaculis, eu scelerisque ante tempor. Integer eros odio, lobortis vitae tortor non, ornare tempor felis. Duis eget tellus id lorem congue posuere. Ut aliquet libero tortor, in egestas nunc laoreet vitae. Donec facilisis porta leo id blandit. Suspendisse potenti. Fusce vehicula tincidunt est id mattis. Donec at ligula sodales, sagittis massa a, interdum nulla. </p>
                            <p>Sed urna turpis, porttitor ac odio quis, porttitor lacinia enim. Integer lacinia, turpis sit amet lacinia semper, nulla enim malesuada nisi, in condimentum nunc enim tristique lectus. Etiam lectus massa, fermentum vitae auctor sed, finibus a dui. Pellentesque fermentum mattis nunc, sed malesuada dui vehicula vitae.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 align-self-center">
                        <div className="image__about-us">
                            <img className="wow animate__animated animate__zoomIn" src={panda3} alt="freep"/>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </section>
  );
}

export default AboutPage;
