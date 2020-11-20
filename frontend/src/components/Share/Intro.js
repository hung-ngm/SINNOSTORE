import React from "react";
import sinnoWorkshop from './images/sinnoWorkshop.jpg';
import sinnoBrand from "./images/sinno-brand.jpg";
import sinno1 from "./images/sinno1.jpg";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

const Intro = () => {
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        {/* <MDBView> */}
                            <img
                                className="d-block w-100 IntroImg"
                                src={sinnoWorkshop}
                                alt="First slide" />
                            <MDBMask overlay="black-light" />
                        {/* </MDBView> */}
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Sinno products</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        {/* <MDBView> */}
                            <img
                                className="d-block w-100 IntroImg"
                                src={sinnoBrand}
                                alt="Second slide" />
                            <MDBMask overlay="black-strong" />
                        {/* </MDBView> */}
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">SINNO SOICT</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        {/* <MDBView> */}
                            <img
                                className="d-block w-100 IntroImg"
                                src={sinno1}
                                alt="Third slide" />
                            <MDBMask overlay="black-slight" />
                        {/* </MDBView> */}
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Sinno workshop</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export { Intro };