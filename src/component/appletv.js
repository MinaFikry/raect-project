import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import boxmodel1 from './tv1.jpg';
import boxmodel2 from './tv2.png';

import {
    BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';

class Tv extends Component {
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
                            <li class="breadcrumb-item active" aria-current="page"><NavLink to="/Apple TV" style={stylelink}>apple Tv</NavLink></li>
                        </ol>


                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="340" title="mac" alt="mac"
                                ></img>
                                <h5> apple TV</h5>

                                <button type="button" class="btn btn-light">shop apple TV  </button>




                            </div>
                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="340" title="mac" alt="mac"
                                ></img>
                                <h5> apple TV 4K</h5>

                                <button type="button" class="btn btn-light">shop apple TV 4K</button>




                            </div>
                        </div>



                    </div>
                </div>
            </div>


        );
    }
}
export default Tv;