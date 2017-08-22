import withRedux from 'next-redux-wrapper';

import makeStore from '../store'
import sessdata from '../lib/session-data'
import Layout from '../components/MyLayout.js'


class IndexPage extends React.Component {
    static async getInitialProps({store,req} ) {
       await sessdata(store,req)
    }

    render() {
        return (
            <Layout user={this.props.user}>
                INDEX
                {JSON.stringify(this.props)}
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onLogin: currUser => dispatch({ type: 'USER', payload: currUser }),
});
const mapStateToProps = state => ({
    user: state.user,
});

export default withRedux(
    makeStore,
    mapStateToProps,
    mapDispatchToProps,
)(IndexPage);
