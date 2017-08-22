import withRedux from 'next-redux-wrapper';

import makeStore from '../store';
import sessdata from '../lib/session-data'
import Layout from '../components/MyLayout.js'


class About extends React.Component {


    static async getInitialProps({store,req} ) {
        await sessdata(store,req)
    }

    render() {
        return (
            <Layout user={this.props.user}>
                <div>
                    About
                    {JSON.stringify(this.props)}
                </div>
            </Layout>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    onLogin: currUser => dispatch({ type: 'USER', payload: currUser }),
    onLogout: currUser => dispatch({type: 'USER', payload: {}})
});
const mapStateToProps = state => ({
    user: state.user
});

export default withRedux(
    makeStore,
    mapStateToProps,
    mapDispatchToProps,
)(About);