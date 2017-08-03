import Layout from '../components/Layout'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import { initStore, getUser} from '../store'
import withRedux from 'next-redux-wrapper'
import 'isomorphic-fetch'


class Index extends React.Component {
    static async getInitialProps ({ store }) {
        const res = await fetch('http://localhost:4000/api/v1/users/profile')
        const user = await res.json()
        store.dispatch(getUser(user))
        console.log(user);

        return { user }
    }

    componentDidMount () {
       // this.timer = this.props.startClock()
    }

    componentWillUnmount () {
        //clearInterval(this.timer)
    }

    render () {
        return (
            <Layout title="Accueil" user={this.props.user}>
              <div>
                <h2>acdh.audio</h2>
                <p>Trouvez ou retrouvez facilement les émissions d'Au Coeur de l'histoire.</p>
              </div>
              <div>
                <nav>
                  Filtres de recherche
                  <input type="text"/>
                </nav>
                <ul>
                  <li>
                    <Link href="/program?id=1"><a>Emission 1 - Like - Vu - A voir</a></Link>
                  </li>
                  <li>
                    <Link href="/program?id=2"><a>Emission 2 - Like - Vu - A voir</a></Link>
                  </li>
                  <li>
                    <Link href="/program?id=3"><a>Emission 3 - Like - Vu - A voir</a></Link>
                  </li>
                </ul>
              </div>
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: bindActionCreators(getUser, dispatch),
    }
}

export default withRedux(initStore, null, mapDispatchToProps)(Index)
