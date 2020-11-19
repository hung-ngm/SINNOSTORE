import React, { useState } from "react";
import { NavBar } from "../Share/NavBar";
import { Footer } from "../Share/Footer";
import { Products } from './Products';
import { SingleProduct } from './SingleProduct';
import { products } from '../../data.js'



export const Apps = () => {
    

    return (
        
        <div className="Apps grid-container">
            <NavBar />
            
            <div className="row center">
            
            
            {
                products.map((product) => {
                    return (
                        
                       <Products key={product._id} product={product} />
                        
                    )
                })
            }
            
            </div>
            
            <Footer/>
        </div>
        
    )
}