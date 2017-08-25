import withRedux from 'next-redux-wrapper';

import makeStore from '../store'
import Layout from '../components/MyLayout.js'


class IndexPage extends React.Component {


    render() {
        return (
            <div>
                INDEX
            </div>
        )
    }
}



export default withRedux(
    makeStore
)(Layout(IndexPage));
