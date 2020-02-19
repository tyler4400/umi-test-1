import React, {Component} from 'react';
import styles from './login.css';

import { Login } from "ant-design-pro";
import { connect } from "dva";

@connect()
export default class extends React.Component {

    onSubmit = (err, values) => {
        console.log(err, values);
        if(!err){
            this.props.dispatch({type: "user/login", payload: values})
        }
    };

    render(){
        return(
            <div className={styles.loginForm}>
                <img
                    className={styles.logo}
                    src="https://img.kaikeba.com/logo-new.png"
                />
                <Login onSubmit={this.onSubmit}>
                    <Login.UserName
                        name="username" placeholder="用户名"
                        rules={[{ required: true, message: "请输入用户名" }]}
                    />
                    <Login.Password
                        name="password"
                        placeholder="密码"
                        rules={[{ required: true, message: "请输入密码" }]}
                    />
                    <Login.Submit>登录</Login.Submit>
                </Login>
            </div>
        )
    }

}
