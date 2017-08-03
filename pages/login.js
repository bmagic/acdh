import Layout from '../components/Layout'
import Link from 'next/link'

export default (store) => (
  <Layout user={store.user}>
    <h1>Connexion</h1>
    <p>
     Formulaire de connexion
    </p>
      <p>
          <Link><a href="register">Créer un compte</a></Link>
      </p>
  </Layout>
)
