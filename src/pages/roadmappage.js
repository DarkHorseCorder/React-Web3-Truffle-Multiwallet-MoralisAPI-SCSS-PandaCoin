import React, {useEffect, useState} from 'react';
import panda2 from '../img/panda_img2.png'
function RoadMapPage() {
  return (
    <section className="page__roadmap">
        <div className="roadmap__body">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center animate__title wow animate__animated  animate__zoomIn"> 
                        <h2>ROADMAP</h2> 
                    </div>
                </div>
                <div className="row roadmap__row">
                    <div className="freep__roadmap">
                        <img src={panda2} alt="freep"/>
                    </div>
                    
                    <div className="roadmap__block col-12  col-lg-5  col-xl-4 offset-xl-1 order-1">
                        <h3><span>Q1</span> 2022</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi est, eleifend at volutpat et, mollis vitae ex. Cras dictum lobortis mollis. In a posuere massa. Aenean vitae euismod nisi, eget vulputate velit. </p>
                    </div>
                    <div className="roadmap__block q3__padding col-12 col-sm-8 col-lg-5 col-xl-4 offset-xl-1  order-3 order xl-2">
                        <h3><span>Q3</span> 2022</h3>
                        <p> Proin ligula neque, tempus quis dictum eu, tempus eget lacus. Nunc vitae condimentum mi, eget vulputate lectus. Ut non condimentum leo. Pellentesque tincidunt vestibulum. </p>
                    </div>
                    <div className="col-12 col-lg-5 col-xl-4 offset-xl-3 roadmap__block2  order-2 order-xl-3">
                        <h3><span>Q2</span> 2022</h3>
                        <p>Mauris non metus maximus, consequat elit vitae, tristique velit. Integer ullamcorper lobortis eleifend. Vestibulum molestie metus ut dui vehicula ultricies. Vestibulum ultricies turpis in maximus tristique.</p>
                    </div>
                                        
                    <div className="roadmap__block2 col-8 col-lg-5 col-xl-4 offset-xl-1 order-4">
                        <h3><span>Q4</span> 2022</h3>
                        <p>Phasellus vestibulum libero eget leo vehicula, eget fringilla neque placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
            </div>
        </div>       
        </div>
    </section>
  );
}

export default RoadMapPage;
