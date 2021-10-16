import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import CartPage from "./views/CartPage/CartPage.js";
import ChooseProductPage_1 from "./views/ChooseProductPage/ChooseProductPage_1.js";
import ChooseProductPage_2 from "./views/ChooseProductPage/ChooseProductPage_2.js";
import ChooseProductPage_3 from "./views/ChooseProductPage/ChooseProductPage_3.js";


//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/Choose1" component={Auth(ChooseProductPage_1, true)} /> 
          <Route exact path="/product/Choose2" component={Auth(ChooseProductPage_2, true)} /> 
          <Route exact path="/product/Choose3" component={Auth(ChooseProductPage_3, true)} /> 
          <Route exact path="/cart" component={Auth(CartPage, true)} />       
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}
//true : 로그인한 사람만 가능

export default App;
