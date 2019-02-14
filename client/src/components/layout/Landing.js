import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Landing extends Component {

    //守卫
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/navleft");
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>基于NodeJS+Express酒店信息管理系统 </h1>
                                <p className="lead"> 技术是就发展的核心</p>
                                <br />
                                <Link to="/register" className="btn btn-lg btn-info btn_a">注册</Link>
                                <Link to="/login" className="btn btn-lg btn-primary btn_a">登录</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {

    auth: PropTypes.object.isRequired,

}


//将状态 映射为属性
const mapStateToProps = (state) => ({
    auth: state.auth,

})


export default connect(mapStateToProps, {})(Landing);