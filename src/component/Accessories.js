import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import boxmodel0 from './accessoris1.jpg';
import boxmodel1 from './Accessories2.jpg';
import boxmodel2 from './Accessories3.jpg';
import boxmodel3 from './Accessories4.jpg';
import boxmodel4 from './Accessories5.jpg';
import boxmodel5 from './Accessories6.jpg';



import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';


class Accessories extends Component {
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
                            <li class="breadcrumb-item active" aria-current="page"><NavLink to="/Accessories" style={stylelink}>Accessories</NavLink></li>
                        </ol>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel0} width="300" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    iPhone Accessories</h5>

                                <button type="button" class="btn btn-light">shop Accessories</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    ipad Accessories</h5>

                                <button type="button" class="btn btn-light">shop Accessories</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    Mac Accessories</h5>

                                <button type="button" class="btn btn-light">shop Accessories</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel3} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    watch Accessories </h5>

                                <button type="button" class="btn btn-light">shop Accessories</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel4} width="300" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    Mice and Keyboards </h5>

                                <button type="button" class="btn btn-light">shop Keyboards</button>
                            </div>
                        </div>




                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel5} width="340" title="mac" alt="mac"
                                ></img>
                                <h5>
                                    Airpods Accessories</h5>

                                <button type="button" class="btn btn-light">shop Accessories</button>




                            </div>
                        </div>




                    </div>
                </div>


            </div>

        );
    }
}
export default Accessories;