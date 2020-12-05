import React from 'react';
import { products } from '../../data';
import { Link } from 'react-router-dom';
import { NavBar } from '../Share/NavBar';
import { Footer } from '../Share/Footer';
import './SingleProduct Style/SingleProduct.css';


export const SingleProduct = (props) => {
    const product = products.find((x) => x._id === props.match.params.id)
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <div className="product-single-card">
            <NavBar />
            <section className="app-show-main product-main-page">
                {/*<ShowMainHeader/>*/}
                <div className="show-main-header">
                    <div className="main-header-icon">
                        <div className="header-icon-body">
                            <img src={product.image} alt={product.name} />
                        </div>
                        {/*
                       <div className="main-header-rec">
                       <span>Internet of Thing</span>
                       </div>
                    */}
                    </div>
                    <div className="main-header-text">
                        <div className="base-info-wrap">
                            <h1>{product.name}</h1>
                            <div className="header-text-author">
                                <Link to="">
                                    <span>Nhà phát triển: </span>
                                    <span>{product.brand}</span>
                                </Link>
                            </div>
                        </div>
                        <div className="header-text-download">
                            <div className="text-download-text">
                                <div className="app-data-wrap">
                                    <p className="description">
                                        <span className="count-stats">{product.numsDownload} Downloads</span>
                                    </p>
                                </div>
                            </div>
                            <div className="download-btn-wrap">
                                <div className="product-button-download">
                                    <button type="buttons" className="btn btn-primary">
                                        <span>Download now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<ShowMainBody />*/}
                <div className="show-main-body collapse in first">
                    <div className="main-body-common main-body-description">
                        <div className="section-title">
                            <h3>Description</h3>
                        </div>
                        <div className="text-wrapper">
                            {product.description}
                        </div>
                    </div>
                    <div className="main-body-common main-body-guide">
                        <div className="section-title">
                            <h3>
                                How to Install
                            </h3>
                        </div>
                        <div className="text-wrapper">
                            {product.guide}
                    </div>
                    </div>
                    <div className="main-body-common main-body-images">
                        <div className="section-title">
                            <h3>Images</h3>
                        </div>
                        <div className="body-images">
                            {product.screenshot}
                    </div>
                    </div>
                    <div className="main-body-common main-body-info">
                        <div className="section-title">
                            <h3>Detail info</h3>
                        </div>
                        <ul className="list-unstyled body-info-list">
                            <li>
                                <span className="info-item-title">File Size:</span>
                                <span className="info-item-content">{product.filesize} MB</span>
                            </li>
                            <li>
                                <span className="info-item-title">Update:</span>
                                <span className="info-item-content">{product.updateTime}</span>
                            </li>
                            <li>
                                <span className="info-item-title">Provider:</span>
                                <span className="info-item-content">{product.brand}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}