import React from 'react'
import {bindActionCreators} from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'
import Link from 'next/link'

import makeStore from '../store'
import {login} from '../actions'
import Layout from '../components/MyLayout.js'
import PageTitle from '../components/PageTitle'

class Login extends React.Component {
    componentDidUpdate() {
        if (this.props.user && this.props.user.email) {
            Router.push('/')
        }
    }

    componentDidMount() {
        if (this.props.user && this.props.user.email) {
            Router.push('/')
        }
    }

    render() {
        return (
            <div>
                <PageTitle title="Connexion"/>
                <section className="section">
                    <div className="container">

                        {this.props.error?<div className="notification is-danger">
                            {this.props.error}
                        </div>:<div/>}

                        <div className="field">
                            <div className="control has-icons-left">
                                <input id="email" name="email" ref="email" className="input" type="text"
                                       placeholder="Email"/>
                                <span className="icon is-small is-left">
                                  <i className="fa fa-envelope"/>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input id="password" name="password" ref="password" className="input"
                                       type="password"
                                       placeholder="Mot de passe"/>
                                <span className="icon is-small is-left">
                                  <i className="fa fa-lock"/>
                                </span>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    Vous n'avez pas encore de compte&nbsp;<Link><a href="/register">créez en
                                    un</a></Link>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="field">
                                        <p className="control">
                                            <button className="button is-success"
                                                    onClick={this.handleLogin.bind(this)}>
                                                Connexion
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    handleLogin() {
        this.props.login(this.refs.email.value, this.refs.password.value)
    }
}

const mapStateToProps = ({user, error}) => ({user, error})

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
    }
}


export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Layout(Login));

