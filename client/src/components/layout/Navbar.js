import React, { Component } from 'react'
import { Link } from 'react-router-dom';


//redux
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { logoutUser } from '../../actions/authActons'

class Navbar extends Component {
    onLogooutClick(e) {
        e.preventDefault();
        this.props.logoutUser()
    }
    render() {

        const { isAuthenticated, user } = this.props.auth;
        // console.log(user)
        const guestLiks = (
            <ul className="nav navbar-nav navbar-right">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login">登录</Link></li>
                    <li><Link to="/register">注册</Link></li>
                </ul>
            </ul>)
        const authLinks = (
            <ul className="nav navbar-nav navbar-right">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <img
                            className="img-circle"
                            style={{ width: "40px", marginRight: "5px", marginTop: "5px" }}
                            src={user.avatar} alt={user.name}
                        />
                    </li>
                    <li>
                        <a href="/login" onClick={this.onLogooutClick.bind(this)}>推出登陆</a>
                    </li>
                </ul>
            </ul>
        )
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" style={{ color: "white" }} href="/">基于Nodejs酒店信息管理系统</a>
                        </div>
                        <div className="collapse navbar-collapse" >

                            {isAuthenticated ? authLinks : guestLiks}

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}



Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,

}
//将状态 映射为属性
const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Navbar);