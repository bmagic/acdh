import Link from 'next/link'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Component} from "react";

import {logout} from '../actions'

class Header extends Component {

    renderUserDropDown() {
        if (this.props.user && this.props.user.email) {
            return (
                <div className="navbar-item has-dropdown is-hoverable ">
                    <a className="navbar-link">
                        Mon compte
                    </a>
                    <div className="navbar-dropdown is-right">
                        <div className="navbar-item">
                            <Link href="/profile">
                                <a>Mes informations</a>
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link href="/logout">
                                <a>Se déconnecter</a>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="navbar-item">
                    <Link href="/login">
                        <a>Connexion</a>
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <header>
                <nav className="navbar has-shadow is-light">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item" href="http://bulma.io">
                                ACDH.audio
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-start">

                    </div>
                    <div className="navbar-end">
                        {this.renderUserDropDown()}
                    </div>
                </nav>
            </header>
        )
    }


    logout = () => {
        this.props.logout()
    }
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logout, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)