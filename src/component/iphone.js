import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import boxmodel0 from './iphone.png';
import boxmodel1 from './iphone1.jpg';
import boxmodel2 from './iphone2.jpg';
import boxmodel3 from './iphone3.jpg';
import boxmodel4 from './iphone4.jpg';
import boxmodel7 from './iphone7.png';
import './iphone.css';
import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';


class Iphone extends Component {
    render() {
        const stylelink = {
            color: "black",
            textDecoration: "none"
        }
        return (
            <div>
                <div className="container">
                    <div className="row">



                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"> <NavLink to="/" style={stylelink}>shop</NavLink></li>
                            <li class="breadcrumb-item active" aria-current="page"><NavLink to="/iphone" style={stylelink}>iphone</NavLink></li>
                        </ol>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel0} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone 12 mini</h5>

                                <button type="button" class="btn btn-light">shop iphone</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone 12 pro max</h5>

                                <button type="button" class="btn btn-light">shop iphone</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone 12 pro</h5>

                                <button type="button" class="btn btn-light">shop iphone</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel3} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone 12 </h5>

                                <button type="button" class="btn btn-light">shop iphone</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel4} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone 11 pro </h5>

                                <button type="button" class="btn btn-light">shop iphone</button>
                            </div>
                        </div>




                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel7} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone 12 plus </h5>

                                <button type="button" class="btn btn-light">shop iphone</button>




                            </div>
                        </div>




                    </div>
                </div>


            </div>

        );
    }
}
export default Iphone;