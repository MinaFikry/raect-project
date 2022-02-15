
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './mac.css';
import boxmodel1 from './macbook1.jpg';
import boxmodel2 from './macbook2.jpg';
import boxmodel3 from './macbook3.jpg';
import boxmodel5 from './macbook5.png';
import boxmodel6 from './macbook6.jpg';
import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';

class Mac extends Component {
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
                            <li class="breadcrumb-item active" aria-current="page"><NavLink to="/Mac" style={stylelink}>Mac</NavLink></li>
                        </ol>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="340" title="mac" alt="mac"
                                ></img>
                                <h5> MacBook Air</h5>

                                <button type="button" class="btn btn-light">shop Mac</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="340" title="mac" alt="mac"
                                ></img>
                                <h5> MacBook pro</h5>

                                <button type="button" class="btn btn-light">shop Mac</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel3} width="340" title="mac" alt="mac"
                                ></img>

                                <h5> Mac mini</h5>
                                <button type="button" class="btn btn-light">shop Mac</button>




                            </div>
                        </div>
                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel5} width="340" title="mac" alt="mac"
                                ></img>

                                <h5>imac</h5>
                                <button type="button" class="btn btn-light">shop Mac</button>




                            </div>
                        </div>
                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel6} width="340" title="mac" alt="mac"
                                ></img>

                                <h5> Mac pro</h5>
                                <button type="button" class="btn btn-light">shop Mac</button>




                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Mac;