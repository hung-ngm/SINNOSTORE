import React from "react";
import sinnoBrand from "./images/sinno-brand.jpg";
import Button from 'react-bootstrap/Button';
// import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

const Intro = () => {
    return (
        <div className="Intro">
            <div className="">
                <div className="container-fluid">
                    <div className="row introRow">
                        <div className="col-lg-6 introImgContainer">
                            <img className="introImg" src={sinnoBrand} alt="sinno" />
                        </div>

                        <div className="col-lg-6 introContent">
                            <div className="introTitle">
                                <b>Sinno Store</b>
                            </div>
                            <div className="introDescribtion">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <div className="introButtonContainer">
                                <Button className="introButton" variant="dark">
                                    <div className="introButtonContent">Lorem</div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export { Intro };