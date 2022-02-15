import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css';
import logoF from './logo2.png';
import lo from "./download.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const stylelink = {
    color: "black",
    textDecoration: "none",
    fontSize: "16px"
}



const FooterPagePro = () => {
    return (
        <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">

            <MDBContainer className="mt-5 mb-4 text-center text-md-left">

                <MDBRow className="mt-3">

                    <MDBCol md="2" lg="2" xl="2" className="mb-4">
                        <img src={lo} width="250" title="mac" alt="mac" style={{ mixBlendMode: "multiply" }}
                        ></img>
                    </MDBCol>
                    <MDBCol md="2" lg="2" xl="2" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>tradline Store</strong>
                        </h6>

                        <p>
                            <a href="#!" style={stylelink} >About Us</a>
                        </p>
                        <p>
                            <a href="#!" style={stylelink}>Contact Us</a>
                        </p>
                        <p>
                            <a href="#!" style={stylelink}>Support</a>
                        </p>

                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold" >
                            <strong >call 19857</strong>
                        </h6>

                        <p>
                            <a href="#!" style={stylelink}>sales@tradelinestores.com</a>
                        </p>
                        <p>
                            <a href="#!" style={stylelink}>Polygon, Sodic West, Beverly Hills</a>
                        </p>
                        <p>
                            <a href="#!" style={stylelink}>Cairo, EG</a>
                        </p>

                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Contact</strong>
                        </h6>

                        <p style={stylelink}>
                            <i className="fa fa-home mr-3" /> New York, NY 10012, US
                        </p>
                        <p style={stylelink}>
                            <i className="fa fa-envelope mr-3" /> tradline@yahoo.com
                        </p>
                        <p style={stylelink}>
                            <i className="fa fa-phone mr-3" /> +20 xxx xxx xxxx
                        </p>
                        <p style={stylelink}>
                            <i className="fa fa-print mr-3" /> ++20 xxx xxx xxxx
                        </p>
                    </MDBCol>
                    <MDBCol md="4" lg="3" xl="3" className="mb-4">
                        <h6 className="text-uppercase font-weight-bold">
                            <strong>Newsletter</strong>
                        </h6>

                        <p>
                            <i className="fa fa-home mr-3" /> Subscribe to our newsletter
                        </p>
                        <input class="form-control " type="text" placeholder="Enter your email address" style={{ marginBottom: "10px" }} ></input>
                        <FaFacebook color="black" fontSize="1.5em" />
                        <FaInstagram color="black" fontSize="1.5em" />
                        <FaVimeoV color="black" fontSize="1.5em" />
                        <BsLinkedin color="black" fontSize="1.5em" />


                    </MDBCol>
                    <p>Tradeline is the one stop place for Apple products, solutions, or accessories. Tradeline also offers pre and after‑sales support, training, customer finance programs, events and special promotions

                        This website is developed and maintained by Bit68</p>
                </MDBRow>
            </MDBContainer>

        </MDBFooter>
    );
}

export default FooterPagePro;