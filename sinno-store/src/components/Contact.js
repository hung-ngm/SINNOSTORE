import React from "react";
import { NavBar } from "./Share/NavBar";
import { Footer } from "./Share/Footer";
import "../contact.css"

const Contact = () => {
    return (
        <div className="Contact">
        <NavBar />
        <form className="form">
            <h1>Give us feedbacks here!</h1>

            <label>Name</label>
            <input placeholder="name" />

            <label>Email</label>
            <input placeholder="Email" />

            <label>Message</label>
            <input placeholder="Message" />

            <button type="submit">Submit</button>

        </form>
        <Footer/>
        </div>
    )
}
export default Contact
