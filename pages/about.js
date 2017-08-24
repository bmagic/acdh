import withRedux from 'next-redux-wrapper';

import makeStore from '../store';
import Layout from '../components/MyLayout.js'


class About extends React.Component {


    render() {
        return (
            <div>
                <div>
                    About
                </div>
            </div>
        )
    }
}


export default withRedux(
    makeStore
)(Layout(About));