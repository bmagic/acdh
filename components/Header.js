import Link from 'next/link'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Component} from "react";

import {logout} from '../actions'

class Header extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props)}
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                {(this.props.user && this.props.user.email) ?
                    <a onClick={this.logout}>Logout</a>
                    : <Link href="/login">
                        <a>Login</a>
                    </Link>}
            </div>
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