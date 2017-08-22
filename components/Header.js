import Link from 'next/link'
import PropTypes from 'prop-types'


const Header = (props) => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        {(props.user && props.user.email) ? <Link href="/logout">
            <a>Logout</a>
        </Link> : <Link href="/login">
            <a>Login</a>
        </Link>}
    </div>
)

Header.propTypes = {
    user: PropTypes.object.isRequired
}

export default Header