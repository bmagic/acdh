import Header from './Header'
import PropTypes from 'prop-types';


const Layout = (props) => (
    <div>
        <Header user={props.user}/>
        {props.children}
    </div>
)

Layout.propTypes = {
    user: PropTypes.object.isRequired
};

export default Layout