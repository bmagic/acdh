import Header from './Header'
import Footer from './Footer'
import {getUser} from '../actions'


const Layout = function (Page) {
    return class Higher extends React.Component {
        static async getInitialProps(ctx) {
            const {store, req} = ctx
            await store.dispatch(getUser(req))
            if (Page.getInitialProps)
                return Page.getInitialProps(ctx);
        }

        render() {
            return <div>
                <Header/>
                <div className="container">
                    <Page {...this.props}/>
                </div>
                <Footer/>
            </div>
        }
    }
}

export default Layout