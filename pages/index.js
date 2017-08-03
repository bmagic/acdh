import Layout from '../components/Layout'
import Link from 'next/link'

export default () => (
  <Layout title="Accueil">
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