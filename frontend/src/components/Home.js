import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import { Intro }  from "./Share/Intro";
import { Cate } from "./Share/Cate";
import { About } from "./Share/About1";
import { About2 } from "./Share/About2";
import { Form } from "react-bootstrap";
// image
import web1 from './Share/images/Web1.jpg';
import mobile from './Share/images/mobile.png';
import IoT from './Share/images/IoT.jpg';
import AI from './Share/images/AI.jpg';
import others from './Share/images/others.jpg';


export const Home = () => {
    return (
        
        <div className="Home">
            <React.Fragment>
                <NavBar />

                <Intro />

                <div className="About">
                    <div className="aboutTitle">
                        <h1 className="aboutTitleContent">About</h1>
                    </div>

                    <About />

                    <div className="container-ident aboutSection2">
                        <div className="row productQuality">
                            <About2 col="col-lg-4 col-md-12 productQuality1" icon="icon fas fa-check-circle fa-4x" title="qualityTitle" content="qualityContent" titleText="Easy to use." contentText="So easy to use, even your dog could do it."/>

                            <About2 col="col-lg-4 col-md-12 productQuality2" icon="icon fas fa-bullseye fa-4x" title="qualityTitle" content="qualityContent" titleText="Lorem ipsum " contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>

                            <About2 col="col-lg-4 col-md-12 productQuality3" icon="icon fas fa-heart fa-4x" title="qualityTitle" content="qualityContent" titleText="Lorem ipsum " contentText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
                        </div>
                    </div>
                    
                </div>
                
                <div className="Cate">
                    <h2>Categories</h2>
                    <div className="row CateRow1">
                        <Cate col="col-lg-6" link="#" imgRowSrc={web1} imgRowAlt="Web" cateClass="product-title"/>
                        <Cate col="col-lg-6" link="#" imgRowSrc={mobile} imgRowAlt="Mobile" cateClass="product-title"/>
                    </div>
                    <div className="row CateRow2">
                        <Cate col="col-lg-4" link="#" imgRowSrc={IoT} imgRowAlt="IoT" cateClass="product-title"/>
                        <Cate col="col-lg-4" link="#" imgRowSrc={AI} imgRowAlt="AI" cateClass="product-title"/>
                        <Cate col="col-lg-4" link="#" imgRowSrc={others} imgRowAlt="Others" cateClass="product-title"/>
                    </div>
                </div>

                <hr />

                <div className="Footer">
                    <Footer />
                </div>
            
            </React.Fragment>
        </div>
    )
}