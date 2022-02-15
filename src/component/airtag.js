import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import boxmodel1 from './airtag1.png';
import boxmodel2 from './airtag2.png';

import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';

class Tag extends Component {
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
                            <li class="breadcrumb-item active" aria-current="page"><NavLink to="/Airtag" style={stylelink}>Airtag </NavLink></li>
                        </ol>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="300" title="mac" alt="mac"
                                ></img>
                                <h5> airpods </h5>

                                <button type="button" class="btn btn-light">shop airpods</button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="200" title="mac" alt="mac"
                                ></img>
                                <h5>  airpods pro</h5>

                                <button type="button" class="btn btn-light">shop airpods</button>




                            </div>
                        </div>





                    </div>
                </div>
            </div>


        );
    }
}
export default Tag;