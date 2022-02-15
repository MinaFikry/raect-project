import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './nav.css'
import logo from './logo2.png';
import { FaSistrix } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import logo3 from './applelogo.png';
import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';
import Shop from './Shop.js';
import Mac from './mac.js';



class Navbar extends Component {
    render() {
        const stylelink = {
            color: "black",

        }


        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark  " >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" width="130" title="tradeline logo" alt="tradeline logo"
                                className="d-inline-block align-text-top"  ></img>

                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">  <NavLink to="/" style={{ color: "rgb(250, 250, 250)" }}>shop</NavLink></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tradeline Care</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">

                                        Enterprise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">

                                        Store Locator</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">
                                        About</a>
                                </li>

                            </ul>
                            <FaSistrix />
                            <FaRegUser />
                            <BiCartAlt />
                            <img src={logo3} alt="apple logo" width="50" style={{ marginLeft: "80px" }} title="tradeline logo" alt="tradeline logo"
                                className="d-inline-block align-text-top"  ></img>


                        </div>

                    </div>
                </nav>

                <div col-lg-12 col-md-12 col-xs-12>
                    <div className="iphone13">

                        <h3 style={{ fontSize: "16px" }} >iPhone 13 Coming Soon.</h3>

                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12  col-md-12 col-xs-12">
                            <ul class="list-group">
                                <div className="shoplist">
                                    <li> <NavLink to="/Mac" style={stylelink}>Mac</NavLink></li>
                                    <li> <NavLink to="/iphone" style={stylelink}>iphone</NavLink></li>
                                    <li> <NavLink to="/ipad" style={stylelink}>ipad</NavLink></li>
                                    <li> <NavLink to="/Apple Watch" style={stylelink}>Apple Watch</NavLink></li>
                                    <li> <NavLink to="/Apple TV" style={stylelink}>Apple TV</NavLink></li>
                                    <li> <NavLink to="/AirPods" style={stylelink}>AirPods</NavLink></li>
                                    <li> <NavLink to="/AirTag" style={stylelink}>AirTag</NavLink></li>
                                    <li> <NavLink to="/Accessories" style={stylelink}>Accessories</NavLink></li>




                                </div>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>


        );
    }

}

export default Navbar;