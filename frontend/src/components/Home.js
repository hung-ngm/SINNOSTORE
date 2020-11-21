import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import { Intro }  from "./Share/Intro";
import { Cate } from "./Share/Cate";
import { About } from "./Share/About";
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
                    <h1>About</h1>
                    <About />
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