import React, { Component } from 'react'
// import classnames from 'classnames';

/**
 * react-redux 的两个最主要的功能
 * connect: 用于 UI 组件生成容器组件，将两种组件链接起来
 * 
 * Provider:可以让组件及子组件拿到state
 * 
 */
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActons';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom'


//组件引入
import TextFieldGroup from '../../common/TextFieldGroup';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
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
            password2: this.state.password2
        };
        //出发方法
        this.props.registerUser(newUser, this.props.history);

    }
    componentWillReceiveProps(nextProps) {
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

        // const { user } = this.props.auth;

        return (
            <div className="container text-center" style={{ marginTop: "50px" }}>
                <h1>注册</h1>
                <h2>创建新的用户</h2>
                <form onSubmit={this.onSubmit} className="form-horizontal text-center">
                    <div className="form-group form-group-lg">
                        <TextFieldGroup
                            error={errors.name}
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="用户名"
                            onChange={this.onChange}
                        />
                        {/* <div
                            className={classnames('col-sm-6 col-sm-offset-3', { 'has-error': errors.name })}
                        // className="col-sm-6 col-sm-offset-3 has-error"
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
                            info="我们使用了gravatar全球公认头像, 如果需要有头像显示, 请使用在gravatar注册的邮箱"
                        />

                        <TextFieldGroup
                            error={errors.password}
                            type="password"
                            name="password"
                            value={this.state.password}
                            placeholder="密码"
                            onChange={this.onChange}
                        />


                        <TextFieldGroup
                            error={errors.password2}
                            type="password"
                            name="password2"
                            value={this.state.password2}
                            placeholder="确认密码"
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}


//将状态 映射为属性
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register));