import React from "react";
import Button from 'react-bootstrap/Button';

export function Cate(prop) {
    return (
        
            <div className={prop.cateSectionNo}>
                <div className="Cate1">
                    <div className="container-fluid">
                        <div className={prop.row}>
                            <div className="col-lg-6 col-md-12">
                                <div className={prop.cateContentNo}>
                                    <div className={prop.cateContentTitleNo}>
                                        <h3 className={prop.cateTitleNo}>{prop.cateContentTitle}</h3>
                                    </div>
                                    <div className={prop.cateContentDesNo}>
                                        <p>{prop.cateContentDes}</p>
                                    </div>
                                    <div className={prop.cateContentDownNo}>
                                        <Button variant="outline-primary">Download</Button>{' '}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className={prop.cateImgNo}>
                                    <img className={prop.imgNo} src={prop.src} alt={prop.alt}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}