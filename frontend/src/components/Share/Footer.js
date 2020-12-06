import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";


export const Footer = () => {
  return (
    <div id="footer">
    
    <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4 sticky-bottom">
      
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">SINNO</h5>
            <p>
              Câu lạc bộ là nơi học tập và tìm kiếm đam mê. 
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Products</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">IoT</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Apps</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Address: Phòng 407b, tòa nhà B1, Đại học Bách Khoa Hà Nội</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Email: sinno@soict.hust.edu.vn</a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="fb-ic mr-3">
                  <MDBIcon fab icon="facebook-f" />
                </a>
              </li>
              <li className="list-unstyled">
                <a href="#!" className="ins-ic mr-3">
                  <MDBIcon fab icon="instagram" />
                 </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://users.soict.hust.edu.vn/sinno/"> SOICT Innovation Club - All Rights Reserved </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    
    </div>
  );
}


