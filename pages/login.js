import React from 'react'
import {bindActionCreators} from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import Link from 'next/link'

import makeStore from '../store'
import {login} from '../actions'
import Layout from '../components/MyLayout.js'

class Login extends React.Component {
    componentDidUpdate(){
        if (this.props.user && this.props.user.email){
            Router.push('/')
        }
    }

    render() {
        const {user} = this.props
        if (user && user.email) {
            return <div>
                <h1>Login</h1>
                <p>you already login</p>
                <p>{user.email}</p>

            </div>
        }
        return <div>
            <h1>Login</h1>
            <hr/>
            <label>email:</label>
            <input id="email" name="email" ref="email"/>
            <br/>
            <label>password:</label>
            <input id="password" name="password" type="password" ref="password"/>
            <hr/>
            <button onClick={this.handleLogin.bind(this)}>submit</button>
            Vous n'avez pas encore de compte <Link><a href="/register">crez en un</a></Link>
        </div>
    }

    handleLogin() {
        this.props.login(this.refs.email.value, this.refs.password.value)
    }
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
    }
}


export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Layout(Login));

