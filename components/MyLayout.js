import Header from './Header'
import {getUser} from '../actions'


const Layout = function(Page) {
    return class Higher extends React.Component {
        static async getInitialProps(ctx) {
            const {store,req} = ctx
            await store.dispatch(getUser(req))
            if(Page.getInitialProps)
                return Page.getInitialProps(ctx);
        }
        render() {
            return <div>
                <Header />
                <Page {...this.props}/>
            </div>
        }
    }
}

export default Layout