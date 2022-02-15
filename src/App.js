import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Navbar from './component/nav';
import './App.css';
import Shop from './component/Shop';
import Mac from './component/mac';
import Iphone from './component/iphone';
import Ipad from './component/ibad';
import Watch from './component/apple watch';
import TV from './component/appletv';
import Air from './component/airbods';
import Tag from './component/airtag';
import Accessories from './component//Accessories';
import FooterPagePro from './component/footer';
import {
  BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';



function App() {

  return (

    <div>

      <BrowserRouter>

        <Navbar />




        <Route exact path="/" >
          <Shop />
        </Route>

        <Route path="/mac" >
          <Mac />
        </Route>

        <Route path="/iphone" >
          <Iphone />

        </Route>
        <Route path="/ipad" >
          <Ipad />

        </Route>
        <Route path="/Apple Watch" >
          <Watch />

        </Route>
        <Route path="/Apple TV" >
          <TV />

        </Route>

        <Route path="/AirPods" >
          <Air />

        </Route>

        <Route path="/AirTag" >
          <Tag />

        </Route>
        <Route path="/Accessories" >
          <Accessories />

        </Route>



        <FooterPagePro />
      </BrowserRouter>



    </div>

  );
}

export default App;
