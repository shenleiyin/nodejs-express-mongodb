import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Content from './components/vessel/Content';


//redux
import { Provider } from 'react-redux'
import store from './store';


//从新设置token
import setAuthToken from './utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { setCurrentUser, logoutUser } from './actions/authActons';


import './App.css';
import { decode } from 'punycode';

if (localStorage.jwtToken) {
  //从新设置token
  setAuthToken(localStorage.jwtToken);

  //解析token
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  //检查token 是否过期

  //获取当前时间
  const currentTime = Date.now() / 1000;
  //判断当前是否大于token过期时间
  if (decode.exp < currentTime) {
    //过期
    store.dispatch(logoutUser());

    //清除用户信息

    //跳转页面
    window.location.href = "/login";

  }


}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="contaier">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/content" component={Content} ></Route>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
