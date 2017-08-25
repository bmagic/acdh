import React from 'react'
import {bindActionCreators} from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

import makeStore from '../store'
import {register} from '../actions'
import Layout from '../components/MyLayout.js'

class Register extends React.Component {
    componentDidUpdate(){
        if (this.props.user && this.props.user.email){
            Router.push('/')
        }
    }

    render() {
        const {user} = this.props
        if (user && user.email) {
            return <div>
                <h1>Register</h1>
                <p>you already login</p>
                <p>{user.email}</p>

            </div>
        }
        return <div>
            <h1>Register</h1>
            <hr/>
            <label>email:</label>
            <input id="email" name="email" ref="email"/>
            <br/>
            <label>password:</label>
            <input id="password" name="password" type="password" ref="password"/>
            <hr/>
            <button onClick={this.handleLogin.bind(this)}>submit</button>
        </div>
    }

    handleLogin() {
        this.props.register(this.refs.email.value, this.refs.password.value)
    }
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch),
    }
}


export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Layout(Register));

