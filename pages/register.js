import React from 'react'
import {bindActionCreators} from 'redux'
import withRedux from 'next-redux-wrapper'
import Router from 'next/router'

import makeStore from '../store'
import {register} from '../actions'
import Layout from '../components/MyLayout.js'
import PageTitle from '../components/PageTitle'

class Register extends React.Component {
    componentDidUpdate() {
        if (this.props.user && this.props.user.email) {
            Router.push('/')
        }
    }

    render() {

        return (
            <div>
                <PageTitle title="S'enregistrer"/>
                <section className="section">
                    <div className="container">

                        {this.props.error ? <div className="notification is-danger">
                            {this.props.error}
                        </div> : <div/>}

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

                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <div className="field">
                                        <p className="control">
                                            <button className="button is-success"
                                                    onClick={this.handleRegister.bind(this)}>
                                                S'enregistrer
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

    handleRegister() {
        this.props.register(this.refs.email.value, this.refs.password.value)
    }
}

const mapStateToProps = ({user, error}) => ({user, error})

const mapDispatchToProps = (dispatch) => {
    return {
        register: bindActionCreators(register, dispatch),
    }
}


export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Layout(Register));

