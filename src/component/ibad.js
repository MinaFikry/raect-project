import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import boxmodel1 from './ipad1.png';
import boxmodel2 from './ipad2.png';
import boxmodel4 from './ipad4.jpg';
import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';

class Ipad extends Component {
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
                            <li class="breadcrumb-item active" aria-current="page"><NavLink to="Ipad" style={stylelink}>ipad</NavLink></li>
                        </ol>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="340" title="mac" alt="mac"
                                ></img>
                                <h5> ipad pro</h5>

                                <button type="button" class="btn btn-light">shop ipad</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="340" title="mac" alt="mac"
                                ></img>
                                <h5> ipad mini</h5>

                                <button type="button" class="btn btn-light">shop ipad</button>




                            </div>
                        </div>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel4} width="340" title="mac" alt="mac"
                                ></img>

                                <h5>ipad air</h5>
                                <button type="button" class="btn btn-light">shop ipad</button>




                            </div>
                        </div>

                    </div>
                </div>
            </div>


        );
    }
}
export default Ipad;