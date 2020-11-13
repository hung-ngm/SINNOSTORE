import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import { Intro }  from "./Share/Intro";
import { Cate } from "./Share/Cate";
import { About } from "./Share/About";
import { Form } from "react-bootstrap";
// image
import web1 from './Share/images/Web1.jpg';


export const Home = () => {
    return (
        
        <div className="Home">
            <React.Fragment>
            <NavBar />
            <Intro />
            
            <div className="Cate">
                <h2>Categories</h2>
                <div className="row CateRow1">
                    <Cate col="col-lg-6" link="#" imgRowSrc={web1} imgRowAlt="Web" cateClass="product-title"/>
                    <Cate col="col-lg-6" link="#" imgRowSrc="https://lh3.googleusercontent.com/proxy/CNh8Wo_03veXElh9c4rx5skv_vwydqCafMLtGesDLhklYJ0JIz-f1UQUZev4oOvGmKyx5vEm-6ZAYF49qBNWJSm5LrfzL-Id4BJW6c-SXcuqtWJe5fMq6-9gl8xSZTEIB5MyM9R_jZei7Dya5ItvG5C-LS5i" imgRowAlt="Mobile" cateClass="product-title"/>
                </div>
                <div className="row CateRow2">
                    <Cate col="col-lg-4" link="#" imgRowSrc="https://www.thegioimaychu.vn/blog/wp-content/uploads/2020/01/iot_internet_of_things_by_jackie_niam_gettyimages-996958260_2400x1600-100788446-large1-e1578563981761.jpg" imgRowAlt="IoT" cateClass="product-title"/>
                    <Cate col="col-lg-4" link="#" imgRowSrc="https://cdnimg.vietnamplus.vn/uploaded/izhsa/2018_11_09/savvycomailab.jpg" imgRowAlt="AI" cateClass="product-title"/>
                    <Cate col="col-lg-4" link="#" imgRowSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ81Ma6MABBqGHnTrHA_GfFbTup5siRYTEuUw&usqp=CAU" imgRowAlt="Others" cateClass="product-title"/>
                </div>
            </div>

            <hr />

            <div className="About">
                <h1>About</h1>
                <About />
            </div>

            <div className="Footer">
                <Footer />
            </div>
            
            </React.Fragment>
        </div>
    )
}