import React, { Component } from 'react'
import { loginUser } from '../../actions/authActons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import classnames from 'classnames';


//组件引入
import TextFieldGroup from '../../common/TextFieldGroup';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        console.log(newUser)
        this.props.loginUser(newUser);
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.errors)
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/content")
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    //守卫
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/content");
        }
    }

    render() {
        const { errors } = this.state;
        // console.log(errors)
        return (
            <div className="container text-center" style={{ marginTop: "50px" }}>
                <h1>登录</h1>
                <h2>请用已注册的用户登录</h2>
                <form onSubmit={this.onSubmit} className="form-horizontal text-center">
                    <div className="form-group form-group-lg">
                        <TextFieldGroup
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="用户名"
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        {/* <div
                            className={classnames('col-sm-6 col-sm-offset-3', { 'has-error': errors.name })}
                        >
                            <br />
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="用户名"
                                onChange={this.onChange} />
                            {errors.name && (<label style={{ fontSize: "12px", float: "left" }} className="control-label">{errors.name}</label>)}
                        </div> */}
                        <TextFieldGroup
                            error={errors.email}
                            type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="邮箱地址"
                            onChange={this.onChange}
                        />
                        <TextFieldGroup
                            error={errors.password}
                            type="password"
                            name="password"
                            value={this.state.password}
                            placeholder="密码"
                            onChange={this.onChange}
                        />

                        <div className="col-sm-6 col-sm-offset-3">
                            <br />
                            <input type="submit" className="col-sm-12 btn btn-primary  btn-lg btn-block" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


//将状态 映射为属性
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(Login);