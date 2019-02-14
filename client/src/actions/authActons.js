
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

export const registerUser = (userData, history) => dispatch => {
    //给rducer
    //请求 注册
    axios.post("/api/users/register", userData)
        .then(res => history.push("/login"))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}


//登录
export const loginUser = userData => dispatch => {
    axios.post("/api/users/login", userData)
        .then(res => {
            const { token } = res.data;
            //存储token到LS
            localStorage.setItem("jwtToken", token);

            //设置axios的headers token
            setAuthToken(token);

            //解析token
            const decoded = jwt_decode(token);
            // console.log(decoded);
            //将decoded给reducer
            dispatch(setCurrentUser(decoded));//用这个方法
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//退出登陆 logout
export const logoutUser = () => dispatch => {
    //删除ls
    localStorage.removeItem("jwtToken");
    //干掉请求头
    setAuthToken(false);
    //连接reducer
    dispatch(setCurrentUser({}));
    window.location.href = "/login";
}
