import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="grey darken-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">SINNO</h5>
            <p>
              Câu lạc bộ là nơi học tập và tìm kiếm đam mê. 
            </p>
          </MDBCol>
          <MDBCol md="6">
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
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Address: Phòng 407b, tòa nhà B1, Đại học Bách Khoa Hà Nội</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Email: sinno@soict.hust.edu.vn</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> SOICT Innovation Club - All Rights Reserved </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}


