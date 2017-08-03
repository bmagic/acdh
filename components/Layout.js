import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = "Au coeur de l'histoire" , user = {name:"wrong"}}) => (
  <div>
    <Head>
      <title>{ title } | acdh.audio</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |
        <Link href='/login'><a>Connexion {user.name}</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      <Link href="/about"><a>A propos</a></Link>
    </footer>
  </div>
)