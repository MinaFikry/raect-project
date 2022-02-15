import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Shop.css';
import boxmodel1 from './mac.png';
import boxmodel2 from './iphone.png';
import boxmodel3 from './ipad.png';
import boxmodel4 from './applewatch.png';
import boxmodel5 from './appletv.png';
import boxmodel6 from './air.png';
import boxmodel7 from './airtab.png';
import boxmodel8 from './acc.png';





class Shop extends Component {
    render() {

        return (
            <div>

                <div className="container">
                    <div className="row">

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel1} width="340" title="mac" alt="mac"
                                ></img>


                                <button type="button" class="btn btn-light">shop Mac</button>




                            </div>


                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel2} width="340" title="apple" alt="apple" ></img>

                                <button type="button" class="btn btn-light">shop apple</button>




                            </div>


                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel3} width="340" title="ipad" alt="ipad"
                                ></img>

                                <button type="button" class="btn btn-light">shop ipad</button>




                            </div>


                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel4} width="340" title="applewatch" alt="applewatch"
                                ></img>
                                <button type="button" class="btn btn-light">shop applewatch</button>




                            </div>


                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel5} width="340" title="apple TV" alt="apple TV"
                                ></img>
                                <button type="button" class="btn btn-light">shop apple TV</button>




                            </div>


                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel6} width="340" title=" airbods" alt=" airbods"
                                ></img>
                                <button type="button" class="btn btn-light">shop airbods</button>




                            </div>


                        </div>

                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel7} width="340" title=" airtag " alt=" airtag"
                                ></img>
                                <button type="button" class="btn btn-light">shop airtag</button>




                            </div>


                        </div>
                        <div className="col col-lg-4  col-md-6 col-sm-12">

                            <div className="boxmodel">

                                <img src={boxmodel8} width="340" title=" Accessories " alt=" Accessories"
                                ></img>
                                <button type="button" class="btn btn-light">shop Accessories</button>




                            </div>


                        </div>





                    </div>


                </div>

            </div>
        );










    }
}
export default Shop;