import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">E7 Armory</h5>
            <p>
                This site is created in React using Node.js, Express and MongoDb. This application is for learning purposes,
                I do not own Epic Seven or any media related to Epic Seven. If you would like to contact me you can reach me at:
                "jingkcheng@hotmail.com". Thank you for checking out my project! To see more of what I've worked on, I've provided
                links you can click to the right. You can also view my portfolio page by clicking my name at the bottom of the footer.
                Have a great day!                
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Other Projects:</h5>
            <ul>
              <li className="list-unstyled">
                <a href="http://tridentgaming.org">Trident</a>
              </li>
              <li className="list-unstyled">
                <a href="http://tollo.jingkcheng.com">Tollo</a>
              </li>
              <li className="list-unstyled">
                <a href="http://esportslounge.jingkcheng.com">eSportsLounge</a>
              </li>
              <li className="list-unstyled">
                <a href="https://wild-coinflip.herokuapp.com/">Wild Cards Coinflip</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.jingkcheng.com"> Jing Cheng </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;